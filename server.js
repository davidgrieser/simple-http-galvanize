const http = require('http');

console.log("Registering Request Listener")
const requestListener = function (req, res) {
    res.writeHead(200);
      res.end('Hello, World!');
    console.log(`Request from <${req.headers['user-agent']}> Processed`);
}

const port = process.env.PORT || 8080;
console.log(`Port set to ${port}`);
const server = http.createServer(requestListener);
console.log("Creating HTTP Server");
server.listen(port);
console.log("Server Listening");
