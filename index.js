// var http = require("http");
// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');




// var http = require('http');
// var fs = require('fs');

// const PORT=8080; 

// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);



// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080); 



// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
// console.log('Server running at http://127.0.0.1:8080/');


var express = require('express')
var app = express();
var fs = require('fs');
// var port = process.env.PORT || 8080;
var path = require('path');
var port = 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res){
    var options = {
        root: path.join(__dirname)
    };
  // res.sendFile(path.join(__dirname, 'index.html'));
    var fileName = "index.html";
    res.sendFile(fileName, options, function (err)
        {
            if (err){
                next(err);
            } else {
                console.log('Sent:', fileName)
            }
        });
});
app.get('/styles.css', function(req, res) {
  res.sendFile(__dirname + "/" + "styles.css");
});

app.get('/main.js', function(req, res) {
  res.sendFile(__dirname + "/" + "main.js");
});

app.post('/save', function(req,res)
         {
             var listJson = req.body;
           res.end("yes");
           console.log(listJson);
             let stringJson = JSON.stringify(listJson);
             // fs.writeFileSync("thing.json", stringJson);
             fs.writeFile("thing.json", stringJson, (err) => {
                 if (err) throw err;
                 console.log('Data written to file.');
             });
         });
app.listen(port);
console.log('Servidor em http://localhost:' + port);
