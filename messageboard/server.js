////requires////
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
//// config////
app.set(express.static(__dirname + '/client/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname +'/client/views')
app.use(bodyParser.urlencoded({ extended : true}))
///mongoose connection////
///modles///

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

///routes///
require('./server/config/routes.js')(app)
/// server///
app.listen(8000, function(){
	console.log('--------8000--------')
})