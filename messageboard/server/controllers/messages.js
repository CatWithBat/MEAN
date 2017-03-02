const mongoose = require('mongoose')
const Message= mongoose.model('Message')
const Comment = mongoose.model('Comment')

module.exports ={
	index: function(req, res){
		Message.find({})
		.populate('_comments')
		.exec(function(err, messages){
			if (err) res.json(err)
			else res.render('index', {messages: messages})
			})
	},
	create_messages: function(req, res){
		var messages = new Message({
		name: req.body.name,
		message: req.body.message
	})
		messages.save(function (err){
		if (err) res.json(err)
		else res.redirect('/')
	})
	},
	create_comment:function(req,res){
		Message.findOne( {_id:req.params.message_id}, function (err, message){
		if (err) res.json(err)
			////create child///
		else {
			var comment = new Comment({
				name: req.body.name,
				comment:req.body.name,
				_message:message._id
			})
			//save our child///
			comment.save(function(err){
				if (err) res.json(err)
				else {
					///update parent///
					message._comments.push(comment._id)
					//save our newly update parent//
					message.save(function(err){
						if (err) res.json(err)
							//get the heck out of their//
						else res.redirect('/')
					})

				}
			})
		}
	})
	}
}