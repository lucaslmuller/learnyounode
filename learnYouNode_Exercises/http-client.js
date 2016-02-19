var http = require('http');

http.get(process.argv[2], callback);

function callback(response){
    response.on("data", function(data){
        console.log(data.toString());
    });
}