'use strict'
const express = require('express');
let fs = require('fs');
let app = express();

app.listen(8080);

app.get('/', (req,res) => {
    res.sendFile("D:\\UNI\\F&B\\hw5\\index.html");
});

app.get('/counter', (req,res) => {
    let counter = parseInt(fs.readFileSync("users.txt","utf8"));
    res.json("{\"counter\": " + counter + "}");
});

app.post('/updateFile', (req,res) => {
    let counter = parseInt(fs.readFileSync("users.txt","utf8"));
    counter++;
    console.log("write " + counter);
    fs.writeFileSync("users.txt",counter);
});



