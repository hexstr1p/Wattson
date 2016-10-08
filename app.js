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
app.post('/wakeCar', function(req, res) {
    res.send(teslaController.wakeCar(1));
});
app.post('/setValet', function(req, res) {
    res.send(teslaController.setValet(1, true, 1243));
});
app.post('/resetValetPin', function(req, res) {
    res.send(teslaController.resetValetPin(1));
});
app.post('/flashLights', function(req, res) {
    res.send(teslaController.flashLights(1));
});
app.post('/honkHorn', function(req, res) {
    res.send(teslaController.honkHorn(1));
});
app.post('/unlockDoors', function(req, res) {
    res.send(teslaController.unlockDoors(1));
});
app.post('/lockDoors', function(req, res) {
    res.send(teslaController.lockDoors(1));
});
app.post('/setTemp', function(req, res) {
    res.send(teslaController.setTemp(1, req.body.temp));
});
app.post('/startHVAC', function(req, res) {
    res.send(teslaController.startHVAC(1));
});
app.post('/endHVAC', function(req, res) {
    res.send(teslaController.endHVAC(1));
});
app.post('/wakeCar', function(req, res) {
    res.send(teslaController.wakeCar(1));
});
app.post('/adjustRoof', function(req, res) {
    res.send(teslaController.adjustRoof(1, true, req.body.percent));
});
app.get('/getDriveAndLocation', function(req, res) {
    res.send(teslaController.getDriveAndLocation(1));
});
// app.get('/', function(req, res) {
//     res.send("<h1>Hello</h1>");
//     //console.log(getIP());
// });

var portl = args._[0] || 3000;
app.listen(portl);
console.log(args);
console.log('Listening on port ' + portl);
