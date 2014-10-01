var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var hbs = require('hbs');
var bodyParser = require('body-parser');
var arduino = require('duino');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', function(request, response) {
    response.render('index');
});

io.on('connection', function (socket) {
	console.log('connection');
    
   
    board = new arduino.Board();

    var led = new arduino.Led({
      board: board,
      pin: 8
    });
    
    var led2 = new arduino.Led({
      board: board,
      pin: 7
    });

    var bleep = function() {
        led.on();
                
        setTimeout(function() {
            led.off();
        }, 100);
    }
    
    var bleep2 = function() {
        led2.on();
        
        
        setTimeout(function() {
            led2.off();
        }, 100);
    }

//    setInterval(bleep, 800);
//    setInterval(bleep2, 850);
//    
    socket.on('button_click', function (data) {
     console.log('button was clicked');
        bleep();
   });
    
});

http.listen(8080);



