var net = require('net');
var date = new Date();
var year = zero(date.getFullYear()); 
var month = zero(date.getMonth() + 1);       
var day = zero(date.getDate());    
var hours = zero(date.getHours());
var minutes = zero(date.getMinutes());
var fullDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes;

function zero(x){
    return (x < 10? "0" : "") + x;
}

    var server = net.createServer(function (socket) {  
       socket.write(fullDate + "\n");
       socket.end();
     })  
     server.listen(process.argv[2]);