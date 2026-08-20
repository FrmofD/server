const http = require('http');
let profile = 'Good afternoon.My name is FrmofD be rich is important for my hole live,l will become Richman ';
const server = http.createServer((request, response) => {
    if (request.method === 'PATCH') {
        let patch = '';

        request.on('data', (chunk) => {
            patch += chunk;
        })
        request.on('end', () => {
            console.log('originbio:', profile);
            profile += patch;
            console.log('updata:', profile);

            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('profile update!!!!!')
        });
    }else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('error back to terminal !');
    }
})
server.listen(2000, () => {
    console.log('Successful run: http://localhost:2000');

})