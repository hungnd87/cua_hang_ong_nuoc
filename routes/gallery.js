/**
 * New node file
 */
var imageServices = require('../service/image_services');

exports.index = function(req, res) {
	imageServices.getImageList(function(rows){
		console.log(rows);
		res.render('gallery', {
			images: rows
		});  
	});
};