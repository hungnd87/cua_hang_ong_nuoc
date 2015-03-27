/**
 * New node file
 */
var properties = require('../config/properties');
var mysql = require('../db/mysql');
var keyUtil = require('../util/key');
var fs = require('fs');

exports.index = function(req, res) {
	var id = keyUtil.genarateUUID();
	var imageFile = req.files.imageFile;
	if (imageFile.name === "") {
		res.redirect("back");
		return;
	}
	
	fs.readFile(imageFile.path, function(err, data) {
		var newPath = properties.fileStoreUrl + '/' + id;
		fs.writeFile(newPath, data, function(err) {
			var img = {
				id : id,
				name : imageFile.name,
				uploadDate : new Date().toGMTString()
			};
			
			saveImageInfo(img, function(err) {
				if (err) {
					res.redirect("back");
					return;
				}
				res.writeHead(302, {
					'Location' : '/gallery'
				});
				res.end();
				fireSSEEvent(img);
			});
		});
	});
};

saveImageInfo = function(image, callback) {
	var query = "INSERT INTO media_info VALUES('" + image.id + "','"
			+ image.name + "','" + image.uploadDate + "')";
	mysql.execQuery(query, function(err, rows) {
		callback();
		console.log('success');
	});
}

fireSSEEvent = function(obj){
	for (var i=0; i<socketList.length; i++){
		socketList[i].emit('news', obj);
	}	
}