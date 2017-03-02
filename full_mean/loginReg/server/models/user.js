const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	first_name: { type: String, required:true, minlength:2, maxlength:256},
	last_name: { type: String, require: true, minlength:2, maxlength:256}, 
	email: { type: String, require:true, minlength:2, maxlength:256}, 
	pw_hash: { type: String, required: true, minlength:2, maxlength:256}
}, {timestamps: true} 

mongoose.model('user', userSchema)