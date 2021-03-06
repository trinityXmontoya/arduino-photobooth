var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
server.listen(9000);

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
 res.render('index.html');
});


console.log('Server running at localhost:9000');

  var OAuth = require('oauth');

  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'your application consumer key',
    'your application secret',
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    'your user token for this app', //test user token
    'your user secret for this app', //test user secret
    function (e, data, res){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
    });
