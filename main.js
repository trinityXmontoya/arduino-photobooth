$(document).ready( function(){
  // uploadToTwitter();
  loadPage();
});

var loadPage = function(){
    $.ajax({
      url: 'http://localhost:8000/',
      method: 'get',
      datatype: 'json'})
    .done(function(data){
      scanForPics(data)}
    )
};

var pics = [];

var scanForPics = function(page){
  pics = page.match(/<img src=".+">/g);
  console.log(pics)
};

var uploadToTwitter = function(picture){
  console.log("twittering")
  $.ajax({
    url: 'https://upload.twitter.com/1/statuses/update_with_media.format',
    method: 'post',
    datatype: 'jsonp',
    jsonp: 'foo',
    data: '{status: "bite me", media: "/a.png"}',
    contentType: 'multipart/form-data'
  })
  .done( function(data){
    console.log(data);
  })
};

var foo = function(){
  console.log("yo dog")
}
  // refreshPage();
// uploadToTwitter();
