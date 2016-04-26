import $ from 'jquery';

var url = 'https://api.github.com/users/benjiecodes';

$.getJSON(url).then(function(event){
  console.log(event);
  var html = getHeaderName(event);
  $('header').append(html);
  var html = getInfo(event);
  $('.infoContainer').append(html);
  var html = getAvatar(event)
  $('.avatar').append(html)
})


function getInfo (info) {

  return `
  <ul class="info">
    <li class="name">Name: ${info.name} </li>
    <li class="githubURL">Github URL: ${info.url}</li>
    <li class="email">Email: ${info.email}</li>
    <li class="company">Company: ${info.company}</li>
    <li class="website">Website: ${info.html_url}</li>
  </ul>

  `;
}

function getHeaderName (info) {

  return `
    <h1>${info.name}</h1>
  `;
}

function getAvatar (info) {

  return `
    <img src="${info.avatar_url}">
  `;

}
