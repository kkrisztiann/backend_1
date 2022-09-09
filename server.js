const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/img', express.static(path.join(__dirname+'/among.jpg')));

app.use('/css', express.static(path.join(__dirname+'/css/style.css')));

app.get('/', function(req,res){
    res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hobbies', function(req,res){
    res.status(200).sendFile(path.join(__dirname + '/hobbies.html'));
});

app.get('/contacts', function(req,res){
    res.status(200).sendFile(path.join(__dirname + '/contacts.html'));
});

app.listen(port,console.log(`Server listening on port${port}...`));