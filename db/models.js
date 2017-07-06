const mongoose = require('./connection.js');


// renamed caption because Comment was not exporting correctly
const CaptionSchema = new mongoose.Schema (
  {
    author: String,
    comment: String,
    // taste: Number,
    // aroma: Number,
    // overall_score: Number
  }, {
    timestamps: true
  }
);

const RamenSchema = new mongoose.Schema (
  {
    title: String,
    origin: String,
    // nutr_label_pic: String,
    image_url: String,
    // taste: Number,
    // aroma: Number,
    // noodle_texture: String,
    // overall_score: Number,
    summary: String,
    captions: [CaptionSchema]
  },
  {
    timestamps: true
  }
);

const Ramen = mongoose.model("Ramen", RamenSchema);
const Caption = mongoose.model("Caption", CaptionSchema);

module.exports = {
  Ramen,
  Caption
}
