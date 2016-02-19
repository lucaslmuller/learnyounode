var fs = require('fs');
var path = require('path')
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, callback);

function callback(err, data){
    if(err){
        console.log(err);
    } else {
        for(var i=0; i < data.length; i++){
            if(path.extname(data[i]) === "."+ext){
                console.log(data[i]);
            }
        }
    }
}