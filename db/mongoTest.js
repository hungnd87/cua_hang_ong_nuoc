var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://125.212.202.232:27017/tame';
MongoClient.connect(url, function(err, db) {
  console.log(err)
  console.log("Connected correctly to server");
  insertDocuments(db, function(){
  	db.close();	
  })
  
});


var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('userinfo');
  // Insert some documents
  collection.insert(
    [{
    	username: 'hung',
    	password: 'hung',
      permission: 'supper_admin'
    }]
  , function(err, result) {
	console.log(result);  
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('sanpham');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    console.log(docs)
    console.dir(docs);
    callback(docs);
  });
}

var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.update({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
}

var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.remove({ a : 3 }, function(err, result) {
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}


