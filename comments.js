// Create web server
// Create a web server that listens to requests on port 3000. When a request is received, read the comments.json file and return the comments as a JSON response.
// Use the built-in http module for creating the server and fs module for reading the file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Server is running at http://localhost:3000');
});
