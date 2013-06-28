/*
 * Dependencies.
 */
var express = require('express'),
    http = require('http'),
    path = require('path');


/*
 * Instantiation
 */
var app = express(),
    server;


/*
 * Settings
 */
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


/*
 * Middleware
 */
// TODO: add favicon
app.use(express.favicon()); // above logger for brevity
// Logging
app.use(express.logger( app.get('env') === 'development' ? 'dev' : 'default' ));
// Set up req.body
app.use(express.bodyParser());
app.use(express.methodOverride());
// Cookies
// TODO: replace secret
app.use(express.cookieParser('secret'));
app.use(express.session()); // NOTE: consider using secure cookie if served over tls
// Router
app.use(app.router);
// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Error handling
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


/*
 * Routes
 */
var routes = require('./routes')(app);

/*
 * Server
 */
server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


/*
 * External interface
 */
module.exports = app;

