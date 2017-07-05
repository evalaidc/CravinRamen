const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cravin_ramen_db', ()=> {
  if (err) {
    console.log(err);
  } else {
    console.log("Cravin' Ramen DB connected");
  }
});

const db = mongoose.connection

module.exports = mongoose;
