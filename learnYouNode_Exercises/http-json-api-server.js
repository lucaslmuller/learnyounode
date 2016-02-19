var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true),
      path = urlObj.path,
      time = urlObj.query.iso,
      result;

  if (path === '/api/unixtime') {
     result = getUnixTimestamp(time);
  }
  
  else if (path === '/api/parsetime') {
    result = getTimeObj(time);
  }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  
  
});

server.listen(process.argv[2]);


function getUnixTimestamp(time) {
  return {
    unixtime: getTimestamp(time)
  };  
}

function getTimestamp(time) {
  return Date.parse(time);
}

function getTimeObj(time) {
  var date = new Date(getTimestamp(time));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}