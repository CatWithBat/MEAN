var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

process.env['APPROOT'] =__dirname

require(path.join(precess.env['APPROOT'], 'server/config/mongoose.js'));
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./client")))

app.listen(8000, function(){
	console.log("listening on port 8000")
})