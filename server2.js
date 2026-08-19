const http = require('http');
const server = http.createServer((request, response) => {
    let statusCode = 200;
    let contentType = 'text/plain; charset=utf-8';
    let content = '';

    if (request.url === '/') {
        content = '<h1>Welcome to my homepage!</h1><br><p>你是一个小趴菜 小鸭吓怕草 我要秀一个dasdasd</p> ';
    }
    else if (request.url ==='/living-room') {
        content = '<h1>Have a beautiful hometowns</h1><br><p>Using what we ve learned, create a simple site for your dream home. Instead of a homepage/contact/about page, use each page to represent a different room in your dream home. In each page representing each room, drop in an inspo photo or text describing the ideal home.</p>';
    }
    else if (request.url ==='/dining-room') {
        content = '<h1>PowerShell show  very  pretty  beautiful build</h1><p>someone maby status so anyway </p>';
    }
    else if (request.url ==='/Kitchen') {
        content = '<h1>command should be late me git off the. </h><p>you are the beautiful gods tings</p>'
    }
    else {
        statusCode = 404;
        content ='<h1>404 Not Found</h1><p>Page does not exist.</p>';
    }
    response.writeHead(statusCode,{'Content-Type' : contentType});
    response.end(content);

});
server.listen(3000, () => {
    console.log('successful load:http://localhost:3000');
})