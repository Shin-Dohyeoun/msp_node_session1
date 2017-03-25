var http = require('http');
var express = require('express');
var app = express();

// view engine setup
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');


// static file setting
app.use(express.static('public'));

//route setup
var index = require('./routes/index');
app.use('/', index);

//port setup
var port = process.env.PORT || 3000;


var server = http.createServer(app);
server.listen(port);


var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
    socket.emit('toclient',{msg:'Welcome !'});
    socket.on('fromclient',function(data){
        socket.broadcast.emit('toclient',data); // 자신을 제외하고 다른 클라이언트에게 보냄
        socket.emit('toclient',data); // 해당 클라이언트에게만 보냄. 다른 클라이언트에 보낼려면?
        console.log('Message from client :'+data.msg);
    });
});