var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get("/getNote", function(req, res) {
  fs.readFile("./test.json", "utf-8", function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
  })
});

app.post("/updateNote/:note", function(req, res) {
  fs.readFile("./test.json", "utf-8", function(err, data) {
    if (err) throw err;
    stringifyFile = data + req.params.note;
    fs.writeFile("./test.json", stringifyFile, function(err) {
      if (err) throw error;
      stringifyFile = req.params.note;
      res.send(stringifyFile);
      console.log("File updated");
    });
  })
});

app.listen(3000);
