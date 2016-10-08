var request = require('request');

// authentications
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/oauth/token',
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});




// wake up car function
request({
  method: 'POST',
  url: 'https://owner-api.teslamotors.com/api/1/vehicles/1/wake_up',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

// set valet mode
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/set_valet_mode',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

// rest valet pin
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/reset_valet_pin',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

// flash lights once
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/flash_lights',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

// honk horn once
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/honk_horn',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

// unlock doors
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/door_unlock',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

// lock doors
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/door_lock',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});


// set temperature
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/set_temps?driver_temp=23.7&passenger_temp=18.1',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});


// start HVAC system
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/auto_conditioning_start',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

// end HVAC system
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/auto_conditioning_stop',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

// adjust panoramic roof
request({
  method: 'POST',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/command/sun_roof_control?state=open&percent=50',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});


// get drivingn state and location
request({
  method: 'GET',
  url: 'https://private-anon-81aa2b52ca-timdorr.apiary-mock.com/api/1/vehicles/1/data_request/drive_state',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
