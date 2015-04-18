/**
 * New node file
 */
var routes = require('../routes');
var gioithieu = require('../routes/gioithieu');
var tintuc = require('../routes/tintuc');
var sanpham = require('../routes/sanpham');
var lienhe = require('../routes/lienhe');
var congtrinh = require('../routes/congtrinh');
var tuyendung = require('../routes/tuyendung');
var login = require('../routes/login');
/*uploadImagePage = require('../routes/upload_image_page');
gallery = require('../routes/gallery');*/

 
exports.registController = function(app){
	/*app.all('/*', function(req, res){
		console.log(req.session.isAuthen);
	});
*/	app.get('/', routes.index);
	app.get('/gioithieu', gioithieu.index);
	app.get('/tintuc', tintuc.index);
	app.get('/sanpham', sanpham.index);
	app.get('/lienhe', lienhe.index);
	app.get('/congtrinh', congtrinh.index);
	app.get('/tuyendung', tuyendung.index);
	app.post('/login', login.index);
	app.get('/checklogin', function(req, res){
		if (!req.session.isAuthen) {
			res.json(false);
		} else {
			res.json(req.session.userInfo);
		}
	});
	app.get('/logout', function(req,res){
		req.session.isAuthen = false;
		req.session.userInfo = {};
		res.json(true);
	})
	/*app.get('/goToUploadImagePage', uploadImagePage.index);
	app.get('/gallery', gallery.index);*/
};

