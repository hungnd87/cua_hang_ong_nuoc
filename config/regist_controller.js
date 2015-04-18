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
	app.get('/', routes.index);
	app.get('/gioithieu', gioithieu.index);
	app.get('/tintuc', tintuc.index);
	app.get('/sanpham', sanpham.index);
	app.get('/lienhe', lienhe.index);
	app.get('/congtrinh', congtrinh.index);
	app.get('/tuyendung', tuyendung.index);
	app.post('/login', login.index);
	/*app.get('/goToUploadImagePage', uploadImagePage.index);
	app.get('/gallery', gallery.index);*/
};

