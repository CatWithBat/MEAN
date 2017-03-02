process.ENV = 8000
const express = require("express");
const app= express();
const session = require('express-session')
const bodyParser = require("body-parser");
const path = require("path");

ap.use(session({
	secret:'Froot Luips', 
	resave: false,
	saveUnitiialized: true
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname +'./client/bower_components')));
app.use(express.static(path.join(__dirname, "./client/views")));

require('./server/config/mongoose_setup.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log("listening on port 8000")
});