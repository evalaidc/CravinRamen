const mongoose = require("mongoose");
const conn = mongoose.connect("mongodb://127.0.01/cravin_ramen_db");

const db = mongoose.connection

// will log an error if db doesn't connect correctly
db.on('error', err => {
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', () => {
  console.log("Cravin' Ramen DB connected");
});

module.exports = mongoose;
