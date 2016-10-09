/*eslint space-before-function-paren: 0*/
module.exports = function(app) {
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

  var gloablURL = 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com';
  var protoURL = gloablURL + '/api/1/vehicles/';

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
    makeCall(protoURL + vehicleID + '/command/flash_lights');
  };
  var unlockDoors = function(vehicleID) {
    makeCall(protoURL + vehicleID + '/command/door_unlock');
  };
  var lockDoors = function(vehicleID) {
    makeCall(protoURL + vehicleID + '/command/door_lock');
  };
  var setTemp = function(vehicleID, temp) {
    makeCall(protoURL + vehicleID  + '/command/set_temps?driver_temp=' +
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
    });
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
    });
  };
};
