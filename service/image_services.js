/**
 * New node file
 */
var properties = require('../config/properties');
var mysql = require('../db/mysql');
var keyUtil = require('../util/key');
var fs = require('fs');

exports.getImageList = function(callback){
	var query = "select * from media_info order by id desc";
	
	mysql.execQuery(query, function(err, rows){
		callback(rows);
	});
};

