
// loading the node built in modules
const http = require('node:http');
const fs = require('fs');

// the values to change
const hostName = '127.0.0.1';
const port = 8080;


// creating a server
const myServer = http.createServer((req, res) => {

    console.log(req.url);


    if (req.url === '/') {
        //code to serve the index page  
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(data);

        })

    } else if (req.url === '/about') {
        // code to serve the about page
        fs.readFile('./about.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(data);

        })
    } else if (req.url === '/contact-me') {
        //code to serve the contact page
        fs.readFile('./contact-me.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(data);

        })
    } else {
        //code to serve the 404 page
        fs.readFile('./404.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(data);

        })
    }



});


// starting the listening by the server I created

myServer.listen(8080);