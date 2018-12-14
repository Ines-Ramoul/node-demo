const http = require('http');
const server = http.createServer();

server.listen(4000, 'localhost');                   

server.on('listening', () => {                      
  console.log('Serveur démarré !');
});

server.on('request', (request, response) => {
  const {method, url} = request;
  console.log('URL demandée : %s %s', method, url); 

  response.end("OK");                           
});