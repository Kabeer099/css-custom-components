const httpServer = require('http-server');

// Set the root directory of your server (where the HTML file is located)
const server = httpServer.createServer({ root: '.' });

// Start the server on port 8080 (you can change the port if needed)
server.listen(8080, () => {
  console.log('Server running at 192.168.0.106:8080/');
});