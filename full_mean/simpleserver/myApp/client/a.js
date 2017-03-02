/////controller

console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose')
var Friend = mongoose.model('Friend');
function FriendsController(){
  this.index = function(req,res){
    //your code here
    Friend.find({}, function(err, results){

      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    Friend.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        res.json(result)
      }
    })
  };
  this.update = function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log(err);
      }else{
        friend.name = req.body.name;
        friend.favoriteLanguage = req.body.favoriteLanguage;
        friend.save(function(err, updatedFriend){
          if (err){
            console.log(err);
          }else{
            res.json(updatedFriend);
          }
        })
      }
    })
  };
  this.delete = function(req,res){
    //your code here
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Friend deleted!"});
      }
    })
  };
  this.show = function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, result){

      res.json(result);
    })
  };
}
module.exports = new FriendsController(); // what does this export?





///mongoose
console.log('mongo connection, mongoose setup');
//This file is complete other than changing our DB
var mongoose      = require('mongoose'),
/*
*  require file-system so that we can load, read, require all of the model files
*/
    fs            = require('fs'),
/*
*  utilize path for easy dir/file joining
*/
    path          = require('path'),
/*
*  Dir where our models are located
*/
    models_path   = path.join( __dirname, "../models"),
/*
*   Regular expression that checks for .js extension
*/
    reg           = new RegExp( ".js$", "i" ),
/*
*  database information
*/
    dbURI         = 'mongodb://localhost/friendsAPI';
/*
* Connect to the database
*/
mongoose.connect( dbURI );
/*
*  CONNECTION EVENTS
*  When successfully connected
*/
mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose default connection open to ${ dbURI }` );
});
/*
*  If the connection throws an error
*/
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});
/*
*  When the connection is disconnected
*/
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});
/*
*  If the Node process ends, close the Mongoose connection
*/
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});
/*
*  read all of the files in the models dir and
*  check if it is a javascript file before requiring it
*/
fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});




//////routes

var path = require('path');
var friends = require('./../controllers/friends.js');

module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
};


////server

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;

//require mongoose configuration, use path.join to build the route
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

//start the server
app.listen(8000, function(){
  console.log('listening on port 8000');
});


