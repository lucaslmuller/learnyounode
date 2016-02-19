var fs = require('fs');

fs.readFile(process.argv[2], callback);

function callback(err, data){
    var str = data.toString();
    var numberOfLines = str.split("\n").length - 1;
    if(err){
        console.log(err);
    } else {
        console.log(numberOfLines);
    }
}