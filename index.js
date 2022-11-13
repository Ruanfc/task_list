
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
