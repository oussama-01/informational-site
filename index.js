

const http = require('http');
const fs = require('fs');

const url = require('url');




http.createServer((req, res) => {

    let myUrl = req.url;
    console.log(myUrl);



    if (myUrl === '/') {
        //code to serve the index page  
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);

            return res.end();
        })

    } else if (myUrl === '/about') {
        // code to serve tha about page
        fs.readFile('./about.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);

            return res.end();
        })
    } else if (myUrl === '/contact-me') {
        //code to serve the contact page
        fs.readFile('./contact-me.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);

            return res.end();
        })
    } else {
        //code to serve the 404 page
        fs.readFile('./404.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);

            return res.end();
        })
    }



}).listen(8080);

