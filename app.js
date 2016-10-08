var express = require('express');
var args = require('minimist')(process.argv.slice(2));
var wattsonController = require('./controllers/wattsonController.js');
var teslaController = require('./controllers/teslaContorller.js');



var app = express();

app.set('view engine', 'ejs');
// app.use(express.static('./public'));

app.use('/', express.static('./'));

// fire controllers
wattsonController(app);

// app.get('/', function(req, res) {
//     res.send("<h1>Hello</h1>");
//     //console.log(getIP());
// });

var portl = args._[0] || 3000;
app.listen(portl);
console.log(args);
console.log('Listening on port ' + portl);
