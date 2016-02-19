var http = require('http');
var bl = require("bl");

http.get(process.argv[2], callback);

function callback(response){
    response.pipe(bl(function (err, data) { 
        data = data.toString();
        if(err){
            return console.log(err);
        } else {
            console.log(data.length);
            console.log(data);
        }
    }));
}