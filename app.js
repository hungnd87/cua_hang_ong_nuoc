
/**
 * Module dependencies.
 */

var express = require('express')  
  , http = require('http')
  , path = require('path')
  , config = require('./config/regist_controller');
	

var app = express();



// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var server = http.createServer(app);

config.registController(app);
server.listen(8080);

process.on('uncaughtException', function(err) {
	console.log('Caught exception: ' + err);
});

