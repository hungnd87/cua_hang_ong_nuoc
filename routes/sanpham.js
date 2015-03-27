
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('_sanpham', { title: 'NODE.JS demo' });  
};