var express = require('express');
var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.json({}));
server.use(bodyParser.urlencoded({extended: false}));

server.use(express.static('public'));

server.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
 });
 
server.listen(8080, function(){
    console.log('servidor listo en el puerto 8080')
});