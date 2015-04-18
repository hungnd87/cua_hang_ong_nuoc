
/*
 * GET home page.
 */

function  findUser(user, callback) {
	var MongoClient = require('mongodb').MongoClient;
	var url = 'mongodb://125.212.202.232:27017/tame';
	MongoClient.connect(url, function(err, db) {
		console.log(err)
		console.log("Connected correctly to server");
		var collection = db.collection('userinfo');
		collection.find({
	  		username: user.username,
	  		password: user.password
	  	}).toArray(function(err, docs) {
	    	callback(docs);
		});
		  
	})
	  // Get the documents collection
  
}

exports.index = function(req, res){
	var username = req.param('username', null);
	var password = req.param('password', null);
	console.log(username, password)
	console.log(req.session)
	findUser({
		username: username,
		password: password
	}, function(docs){
		if (docs.length == 0) {
			res.json('false');  
			return;
		}
		req.session.isAuthen = true;
		req.session.userInfo = docs[0]
	})
	if (username == 'hung' && password == 'hung') {
		req.session.isAuthen = true;
		req.session.userInfo = {
			username: username
		}
	}
 	res.json('false');  
};

