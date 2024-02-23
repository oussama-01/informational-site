
// Loading the node built-in modules
const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');

//
const hostName = '127.0.0.1';
const port = 8080;


// Creating an http server

const server = http.createServer((req, res) => {
    console.log(req.url);

    const myURL = new URL(req.url, 'http://localhost:8080');
    console.log(myURL);

    if (myURL.pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            //if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);

        });

    } else if (myURL.pathname === '/about') {
        fs.readFile('about.html', (err, data) => {
            //if (err) throw err;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);

        });

    } else if (myURL.pathname === '/contact-me') {
        fs.readFile('contact-me.html', (err, data) => {
            //if (err) throw err;

            res.end(data);

        });

    } else {
        fs.readFile('404.html', (err, data) => {
            //if (err) throw err;
            res.end(data);

        });
    };
});


// making the created server to listen

server.listen(port, () => {
    console.log('the server iss listening '); 
});