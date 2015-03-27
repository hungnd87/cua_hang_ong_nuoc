mysql = require("mysql");
propesties = require("../config/properties");

exports.getConnection = getConnection = function() {
	var connection = mysql.createConnection({
		user : propesties.db.user,
		password : propesties.db.password,
		database : propesties.db.database
	});

	return connection;
}
exports.execQuery = function (str, callback){
	var conn = getConnection();
	conn.query(str, function(err, rows){
		callback(err, rows);
	});
}
