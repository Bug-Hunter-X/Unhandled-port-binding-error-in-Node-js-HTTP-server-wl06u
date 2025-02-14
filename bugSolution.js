const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Use a function to handle the error 
function startServer(port) {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
      //Try a different port
      startServer(port + 1);
    } else {
      console.error(`Server error:`, err);
    }
  });
}
startServer(8080); 