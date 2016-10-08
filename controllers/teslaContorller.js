/*eslint space-before-function-paren: 0*/

var request = require('request');

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
    return body;
  });
};

// authentications
var authenicate = makeCall('https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/oauth/token');
var wakeCar = function(vehicleID) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/wake_up');
};
var setValet = function(vehicleID, on, passwd) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/set_valet_mode');
};
var resetValetPin = function(vehicleID) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/reset_valet_pin');
};
var flashLights = function(vehicleID) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/flash_lights');
};
var honkHorn = function(vehicleID) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/flash_lights');
};
var unlockDoors = function(vehicleID) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/door_unlock');
};
var lockDoors = function(vehicleID) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/door_lock');
};
var setTemp = function(vehicleID, temp) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/set_temps?driver_temp=' + temp + '&passenger_temp=' + temp);
};
var startHVAC = function(vehicleID) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/auto_conditioning_start');
};
var endHVAC = function(vehicleID) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/auto_conditioning_stop');
};
var adjustRoof = function(vehicleID, state, percent) {
  makeCall('https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID +
  '/command/sun_roof_control?state=' + state + '&percent=' + percent);
};

var getDriveAndLocation = function(vehicleID) {
  request({
    method: 'GET',
    url: 'https://owner-api.teslamotors.com/api/1/vehicles/' + vehicleID + '/data_request/drive_state',
    headers: {
      'Authorization': 'Bearer {access_token}'
    }},
    function(error, response, body) {
      if (error) return;
      console.log('Status:', response.statusCode);
      console.log('Headers:', JSON.stringify(response.headers));
      console.log('Response:', body);
  });
};
