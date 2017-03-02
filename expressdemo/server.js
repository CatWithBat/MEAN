//////////// Modules////////////////////
var express = require('express')
var bodyParser = require('body-parser')
////////////////Config////////////////
var app = express()

///// setting up our static foulder to be given to the browser ////
app.use(express.static(__dirname +'/static'))
////// locate our views folder to help our server fin our views /////
app.set('views', __dirname + '/views')
/////// or templating engine is ejs, our server should read ejs files ///
app.set('view engine', 'ejs')
	/////// unencode url to extract the form inforation we require
	app.use(bodyParser.urlencoded({extended:true}))

console.log(__dirname)
////////////////Routes////////////////
//// process a / request and  load the index /////
app.get('/', function (req, res){
	res.render('index')
})
app.post('/craycray', function(req, res){
	console.log(req.body.name)
	var cray = {
		craycray: req.body.name,
		jayjay: req.body.email,
		saysay: req.body.dojo,
		baebae: req.body.language,
		naynay: req.body.comment
	}
	res.render('craycray', cray)
})
///////////////Launching our server///////////////
app.listen(8000, function (){

})