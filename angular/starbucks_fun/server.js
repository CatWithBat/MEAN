var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./client/views")));

app.listen(8000, function(){
	console.log("listening at port 8000")
})