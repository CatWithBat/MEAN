const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const models_path = path.join(__dirname, '../models')
const reg  = new RegExp('.js$', 'i')
const dbURI = 'mongodb://localhost/logorego'

mongoose.connect(dbURI)

mongoose.connection.on('connected', function (){
	console.log('Mongoose default connection open to ${ dbURI }')
})
mongoose.conection.on('error', function (err) {
	console.error('mongoose default connection error: ${ err }')
})

mongoose.connection.on('disconnected', function (){
	console.log('mongoose default connection disconnected')
})
process.on('SIGINT', function (){
	mongoose.connection.close(function(){
		console.log('Mongoose default connection disconnected through ap termination')
		process.exit(0)
	})
})
fs.readdirSync(models_path).forEach(function (file) {
	if (reg.test(file)) {
		require(path.join(models_path, file))
	}
})