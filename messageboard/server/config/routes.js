const messages = require('../controllers/messages.js')

module.exports = function (app) {
	app.get('/', function(req, res){
		messages.index(req,res)
	})
app.post('/messages', function(req,res){
	messages.create_messages(req,res)
})
app.post('/comments/:message_id', function(req, res){
	console.log(req.params)
	messages.create_comment(req, res)
})
}