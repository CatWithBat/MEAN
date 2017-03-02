console.log('users controller', process.ENV)
const mongoose = require('mongoose')
const user = mongoose.model('user')
function UsersController (){
	this.index = function (req,res) {
		User.find({}, function (err, users) {
			if (err) res.json(err)
			else res.json(users)
		})
	}
	this.login = function (req, res) {}
	this.register = function (req,res) {
		console.log(req.body, UC)
	}
}
module.exports = new UsersController