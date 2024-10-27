const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(`Received data: ${body}`);
            res.end('Data received\n');
        });
    } else {
        res.end('Send a POST request to simulate login\n');
    }
});

server.listen(4444, () => {
    console.log('Server running at http://localhost:4444/');
});

