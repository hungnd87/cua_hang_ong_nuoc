/**
 * New node file
 */
var properties = require('../config/properties');
var fs = require('fs');

exports.index = function(req, res) {
	res.writeHeader(200, {'Content-Type':'image/jpg'});
	var id=req.query.id;
	var path = properties.fileStoreUrl + '/' + id;
	fs.readFile(path, function(err, data){
		if (err) {
			res.end();
		}
		res.write(data);
		res.end();
	});		
};
