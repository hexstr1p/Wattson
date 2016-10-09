/*eslint space-before-function-paren: 0*/
var express = require('express');
var args = require('minimist')(process.argv.slice(2));
var wattsonController = require('./controllers/wattsonController.js');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static('./'));
var request = require('request');

var hype;

var makeCall = function(command) {
  request({
    method: 'POST',
    url: command
  },
  function(error, response, body) {
    if (error) return;
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    hype = body;
  });
  return hype;
};

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

var gloablURL = 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com';
var protoURL = gloablURL + '/api/1/vehicles/';
var thing1;
var thing2;

// authentications
var authenicate = makeCall(gloablURL + '/oauth/token');

var wakeCar = function(vehicleID) {
  makeCall(protoURL + vehicleID + '/wake_up');
};
var setValet = function(vehicleID, on, passwd) {
  makeCall(gloablURL + vehicleID + '/command/set_valet_mode');
};
var resetValetPin = function(vehicleID) {
  makeCall(protoURL + vehicleID + '/command/reset_valet_pin');
};
var flashLights = function(vehicleID) {
  makeCall(protoURL + vehicleID + '/command/flash_lights');
};
var honkHorn = function(vehicleID) {
  makeCall(protoURL + vehicleID + '/command/honk_horn');
};
var unlockDoors = function(vehicleID) {
  makeCall(protoURL + vehicleID + '/command/door_unlock');
};
var lockDoors = function(vehicleID) {
  makeCall(protoURL + vehicleID + '/command/door_lock');
};
var setTemp = function(vehicleID, temp) {
  makeCall(protoURL + vehicleID + '/command/set_temps?driver_temp=' +
    temp + '&passenger_temp=' + temp);
};
var startHVAC = function(vehicleID) {
  makeCall(protoURL + vehicleID + '/command/auto_conditioning_start');
};
var endHVAC = function(vehicleID) {
  makeCall(protoURL + vehicleID + '/command/auto_conditioning_stop');
};
var adjustRoof = function(vehicleID, state, percent) {
  makeCall(protoURL + vehicleID + '/command/sun_roof_control?state=' +
    state + '&percent=' + percent);
};

var getTemp = function(vehicleID) {
  request({
    method: 'GET',
    url: protoURL + vehicleID + '/data_request/climate_state',
    headers: {
      'Authorization': 'Bearer {access_token}'
    }
  },
  function(error, response, body) {
    if (error) return;
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    thing1 = body;
  });
  return thing1;
};
var getDriveAndLocation = function(vehicleID) {
  request({
    method: 'GET',
    url: protoURL + vehicleID + '/data_request/drive_state',
    headers: {
      'Authorization': 'Bearer {access_token}'
    }
  },
  function(error, response, body) {
    if (error) return;
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    thing2 = body;
  });
  return thing2;
};
// fire controllers
wattsonController(app);
app.post('/wakeCar', function(req, res) {
  res.send(wakeCar(1));
});
app.post('/setValet', function(req, res) {
  res.send(setValet(1, true, 1243));
});
app.post('/resetValetPin', function(req, res) {
  res.send(resetValetPin(1));
});
app.post('/flashLights', function(req, res) {
  res.send(flashLights(1));
});
app.post('/honkHorn', function(req, res) {
  res.send(honkHorn(1));
});
app.post('/unlockDoors', function(req, res) {
  res.send(unlockDoors(1));
});
app.post('/lockDoors', function(req, res) {
  res.send(lockDoors(1));
});
app.post('/setTemp', function(req, res) {
  res.send(setTemp(1, req.body.temp));
});
app.post('/startHVAC', function(req, res) {
  res.send(startHVAC(1));
});
app.post('/endHVAC', function(req, res) {
  res.send(endHVAC(1));
});
app.post('/wakeCar', function(req, res) {
  res.send(wakeCar(1));
});
app.post('/adjustRoof', function(req, res) {
  res.send(adjustRoof(1, true, req.body.percent));
});
app.get('/getDriveAndLocation', function(req, res) {
  res.send(getDriveAndLocation(1));
});
app.get('/getTemp', function(req, res) {
  res.send(getTemp(1));
});
// app.get('/', function(req, res) {
//     res.send("<h1>Hello</h1>");
//     //console.log(getIP());
// });

var portl = args._[0] || 3000;
app.listen(portl);
console.log(args);
console.log('Listening on port ' + portl);
