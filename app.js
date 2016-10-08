var express = require('express');
var args = require('minimist')(process.argv.slice(2));
var wattsonController = require('./controllers/wattsonController.js');


var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
// fire controllers
wattsonController(app);


var portl = args._[0] || 3000;
app.listen(portl);
console.log(args);
console.log('Listening on port ' + portl);
