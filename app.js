const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded());

app.get("/", (req, res)=> {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
  var species = req.body.fishType;
  var weight = req.body.weight;
  var angler = req.body.angler;

  console.log(species + " " + weight + " " + angler)
})

app.listen(3000, ()=>{
  console.log("app running on port 300");
})
