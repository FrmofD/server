const http = require('http');
const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        let message = '';
        
        request.on('data', (chunk) => {
            message += chunk;
        });
        request.on('end', () => {
            console.log('new message:', message);
            response.writeHead(200, {'Content-Type' : 'text/plain'});
            response.end('message receiverd');
        })
}else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }
})
server.listen(1500, () => {
    console.log('successful load, http://localhost:1500');
})