const http = require("http");
const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
    response.end('message in the bottle received! Lound and clear, captain! ');
});
server.listen(3000, () => {
    console.log('Server is running on http://Localhost:3000');
});