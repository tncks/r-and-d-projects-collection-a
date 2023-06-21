const http = require("http");
const express = require('express');
const app = express();
const username = encodeURIComponent("suchan");
const password = encodeURIComponent("Piloom01!@");

var db;

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.lykjk.mongodb.net/test`, function(e, client){
    console.log('Server starting...');
    app.listen(8080,function(){
        db = client.db('myDB');
        if(e) console.log('error');
        console.log('good');
    });
});





http.createServer(function (req, res) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello, World !!!"
   res.end('node js hello world !!! \n');
}).listen(8000);

// This message will be printed in the console
console.log('Server is running live at http://127.0.0.1:8000/');
console.log('Server is waiting live at http://127.0.0.1:8000/add');



app.post('/add', function(req, res){
    console.log('add 접속됨');
    res.send('전송 완료');
    db.collection('users').insertOne({"name": "n", "email": "e"}, function(e, res){
        console.log('nice');
    });
}); 