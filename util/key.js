/**
 * New node file
 */
module.exports.genarateUUID = function(){
	var date = new Date();
	var rand = Math.random();
	var str = date.getTime() + date.getTimezoneOffset() + rand;
	
	return str;
}
