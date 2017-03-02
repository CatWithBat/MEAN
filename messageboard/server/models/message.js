const mongoose = require('mongoose')
var MessageSchema= new mongoose.Schema({
	name:{type: String, required:true, minlength: 2},
	message:{ type:String, required:true, minlength:1},
	_comments: [{type:mongoose.Schema.ObjectId, ref:'Comment'}]
}, {timestamps:true})

mongoose.model('Message', MessageSchema)
