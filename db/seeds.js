const Ramen = require("./models.js").Ramen;
const Caption = require("./models.js").Caption;

// removing any stragglers of data from previous runs
Ramen.remove({}, err => {
  if (err) {
    console.log(err);
  }
});

Caption.remove({}, err => {
  if (err){
    console.log(err);
  }
});
