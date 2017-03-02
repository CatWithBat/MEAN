const mongoose = require('mongoose');
const assoc = mongoose.model('Assoc');
function AssocController (){
	this.index = function (){
		Assoc.find({}, function (err, assoc){
			if(err) res.json(err)
			else res.json(assoc)
		})	
	}
	this.add = (reqm res){
		console.log(req.body, 'AC')
	}
}
module.exports = new AssocController