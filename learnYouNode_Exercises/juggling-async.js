var http = require('http');
var bl = require("bl");
var calls = 0;

var urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
];

request();

function request(){
    http.get(urls[calls], callback);
}

function callback(response){
    response.pipe(bl(function (err, data) { 
        data = data.toString();
        if(err){
            return console.log(err);
        } else {
            console.log(data);
        }
    }));
    calls++;
    if(calls <= 2){
        request();
    }
}