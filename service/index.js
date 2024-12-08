const express = require('express');
const app = express();
//const DB = require('./database.js');
const authCookieName = 'token';
const { peerProxy } = require('./peerProxy.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;
// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// let exampleData = { message: "Initial server data" };

// apiRouter.get('/text', async (req, res) => {

//   console.log("GET Request to '/text' received.");
//   res.json(exampleData); // Sends the stored example data as JSON

// });

// apiRouter.post('/send', async (req, res) => {
  
//   const receivedData = req.body; // Access the body of the POST request
//   console.log(req.body)
//   console.log("POST Request to '/send': ", receivedData);

//   // Update example data or handle it as needed
//   exampleData = { ...exampleData, ...receivedData };

//   // Respond with the updated data
//   res.json({ success: true, updatedData: exampleData });

// });

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


peerProxy(httpService);