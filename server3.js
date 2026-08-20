const http = require('http');
let likes = 0;
const server = http.createServer((request, response) => {
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8';
    let content = '';
    if (request.method === 'GET') {
        likes++;
        console.log(`likes: ${likes}`);
    }
    if (request.url === '/pikachu') {
        content = '<h1>pika pika</h1><br><img src="https://i.imgur.com/k5cfniM.png" alt="Pikachu">';
    }else if (request.url === '/sylveon') {
        content = '<h1>sylv sylv</h1><br><img src=""https://i.imgur.com/rKGgVEm.png" alt="Sylveon">';
    }else {
        content = 'this pokemon is currently resting!'
    }
    response.writeHead(statusCode, {'content-Type': contentType});
    response.end(content);

})
server.listen(1000, () => {
    console.log('successful load, http://localhost:1000');
})