 var http = require('http');
 var fs = require("fs");

var server = http.createServer(function (req, res) {  
    var readStream = fs.createReadStream(process.argv[3],'utf8');
        readStream.pipe(res);
});  
server.listen(process.argv[2]);