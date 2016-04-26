import $ from 'jquery';
import token from "./github-token";

$.ajaxSetup({
  headers: {
    Authorization: "token " + token
  }
});

var url = 'https://api.github.com/users/benjiecodes';

$.getJSON(url).then(function(event){
  console.log(event);
  var html = getHeaderName(event);
  $('#headerName').append(html);
  var html = getInfo(event);
  $('#infoContainer').append(html);
  var html = getAvatar(event)
  $('.avatar').append(html)
})


function getInfo (info) {
  if (info.company === null) {
    info.company = '"Currenly Unavailable"';
  }
  return `
  <div class="info">
    <ul>
      <li class="name"><span>Name: </span> ${info.name} </li>
      <li class="githubURL"><span>Github URL: </span> ${info.url}</li>
      <li class="email"><span>Email: </span> ${info.email}</li>
      <li class="company"><span>Company: </span>${info.company}</li>
      <li class="website"><span>Website: </span>${info.html_url}</li>
    </ul>
  </div>
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
