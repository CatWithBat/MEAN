const mongoose = require('mongoose')

var AssocSchema = new mongoose.Schema({
	team:{type:String, minlength:4, maxlength:40, required:true},
	player:{type:String, minlength:4, maxlength:40, required:true }
})
