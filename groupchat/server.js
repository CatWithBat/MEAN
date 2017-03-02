const express = require('express')
const bodyParser = require('body-parser')
const io = require('socket.io')
const app = express()
app.use(express.static(__dirname +'/views'))
app.use(bodyParser.urlencoded({ extended: true}))
var server = app.listen(8000, function(){
	console.log('port 8000')
})
io.listen(server, function(){
	conole.log('sockets are active')
})
const io = require('socket.io').listen(server)
io.connect