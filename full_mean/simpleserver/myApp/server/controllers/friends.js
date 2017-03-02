console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below

var mongoose = require('mongoose')
var Friend = mongoose.model('Friend');
function FriendsController(){
  this.index = function(req,res){
  
    Friend.find({}, function(err, results){
      res.json(results);
    })
  };
  this.create = function(req,res){
    Friend.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }
      else{
        res.json(result)
      }
    })
  };
  this.update = function(req,res){
    //your code here
    res.json({placeholder:'update'});
  };
  this.delete = function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  };
  this.show = function(req,res){
    //your code here
    res.json({placeholder:'show'});
  };
}
module.exports = new FriendsController(); // what does this export