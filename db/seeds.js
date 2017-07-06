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

//
var spic_sea = new Ramen({
  "title": "Ottogi Spice Seafood Noodle",
  "origin": "Korea",
  "summary": "No that is not a typo. They actually spelled Spicy with an 'e.' If you like fishly smelling ramen, but you can reduce it by adding less of the flavoring.",
  "image_url": "http://www.theramenrater.com/wp-content/uploads/2011/06/2011_6_30_441_001.jpg"
})
var coal = new Ramen({
  "title": "Sau Tao Non-fried Bamboo Charcoal noodle",
  "origin": "Hong Kong/China",
  "summary": "Overall good and flavorful taste. Actually I really enjoyed the noodles and the texture of them and how they didn't go as soggy or flat. It took much longer for it, so it retains more of the good texture of ramen.",
  "image_url": "http://www.theramenrater.com/wp-content/uploads/2016/12/2016_12_12_2321_001.jpg"
})

// comment seeds
var caption1 = new Caption({
  "author": "Eva",
  "comment": "I agree this one's noodles were amazing."
})
var caption2 = new Caption({
  "author": "Mike",
  "comment": "I think the seafood flavor is actually pretty good."
})
var caption3 = new Caption({
  "author": "Joe",
  "comment": "The noodles and flavor for this one were a little disappointing though. I also don't know what the extra oil packet did."
})

spic_sea.captions.push(caption2);
spic_sea.save((err, caption) => {
  if (err){
    console.log(err);
  } else {
    console.log(caption)
  }
});

coal.captions.push(caption1, caption3);
coal.save((err, caption) => {
  if (err){
    console.log(err);
  } else {
    console.log(caption)
  }
});
