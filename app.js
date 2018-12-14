var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require("mongoose");
mongoose.Promise = global.Promise; //faire une promesse de storage
mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    site: String,
    metier: String,
    outil: String,
    projet: String,
    programmes: String,
    task: String,
    functions: String,
    funcadd: String,
    search: String,
    ecm: String,
    ecm_freq: String,
    ecm_nav: String,
    wiki: String,
    wiki_freq: String,
    wiki_nav: String,
    intranet: String,
    intranet_freq: String,
    intranet_nav: String,
    raison: String,
    colab: String,
    but: String,
    besoin_intranet: String,
  });

var Sondage = mongoose.model("Sondage", nameSchema);

app.use('/assets',express.static('assets'));    

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/formsubmitted", (req, res) => {
    var myData = new Sondage(req.body);
    myData.save()
      .then(item => {
        res.send("Thank you for filling the form, the data was sent to database.");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});