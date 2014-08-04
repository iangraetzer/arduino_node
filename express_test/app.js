var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var hbs = require('hbs');
var blogEngine = require('./blog');
var bodyParser = require('body-parser');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(request, response) {
   response.render('index', { title: "My Blog", entries: blogEngine.getBlogEntries() });
});

app.get('/article/:id', function(request, response) {
    var entry = blogEngine.getBlogEntry(request.params.id);
    response.render('article', { title: entry.title, blog:entry });
});


io.on('connection', function (socket) {
	console.log('connection');
  // socket.emit('news', { hello: 'world' });
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});

http.listen(8080);