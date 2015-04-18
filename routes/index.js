
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(req.session.isAuthen)
  res.render('index', { title: 'NODE.JS demo' });  
};