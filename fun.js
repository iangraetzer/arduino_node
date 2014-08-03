var arduino = require('duino'),
    board = new arduino.Board();

var led = new arduino.Led({
  board: board,
  pin: 13
});

var bleep = function() {
    led.on();
    console.log('led is on');
    setTimeout(function() {
        led.off();
        console.log('led is off');
    }, 100);
}

    setInterval(bleep, 1000);
//
//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//    res.send('index.html');
//    
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');
//

