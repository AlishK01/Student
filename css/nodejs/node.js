var http = require('http');
var display = require('./display_name');

var server = http.createServer(function (req, rese) {

});

server.listen('5000', () => {
    console.log("server is listing")
})

