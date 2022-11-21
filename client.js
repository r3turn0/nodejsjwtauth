const http = require('http');
const url = require('url');
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname + '.env')});
console.log({path: path.resolve(__dirname + './.env')});

let token = process.env.JWT_SECRET_KEY;
const apiUrl = new url.URL('https://api.parseur.com')
const auth = Buffer.from('Token ' + token).toString('base64');
const header = {
    host: apiUrl.host, 
    'Authorization': auth, 
    'WWW-Authenticate': auth,
    path: '/',
    method: 'GET'
  }
console.log(header);
(async () => {
  try {
    const req = http.get(header, (res) => {
      console.log(res.statusMessage);
    });
  }
  catch (err) {
    console.log('An error has occured: ', err);
    console.log('The request made was: ', req);
  }
})();


// // Create an HTTP server
// http.createServer((req, res) => { })
//   app.listen(3000, '127.0.0.1', () => {
//     console.log('listening on port: 3000');
  // Getting client request

// const request = http.request(header, function(err, response) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(response);
// });

// request.end();
// request.on('response', function (response) {
//     console.log('STATUS: ' + response.statusCode);
//     console.log('HEADERS: ' + JSON.stringify(response.headers));
//     response.setEncoding('utf8');
//     response.on('data', function (chunk) {
//         console.log('BODY: ' + chunk);
//     });
// });

 
  // Getting protocol
  // by using protocol method
//   console.log("protocol :- " + req.protocol)
 
//   process.exit(0)
// });