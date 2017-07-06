const express = require('express');
const parser = require('body-parser');
const mongoose = require('./db/connection.js');

// pulling schemas from models
const Ramen = require('./db/models.js').Ramen;
const Caption = require('./db/models.js').Caption;

let app = express()

app.set("port", process.env.Port || 3001);
app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.get("/", function(req, res) {
})


app.listen(app.get("port"), () => {
  console.log("Port working!");
});
