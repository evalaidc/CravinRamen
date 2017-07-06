const mongoose = require('./connection.js');

const RamenSchema = new mongoose.Schema (
  {
    type: String,
    nutr_label_pic: String,
    image_url: String,
    taste: Number,
    aroma: Number,
    noodle_texture: String,
    overall_score: Number,
    summary: String,
    comments: [CommentSchema]
  },
  {
    timestamps: true
  }
);

const CaptionSchema = new mongoose.Schema (
  {
    author: String,
    comment: String,
    taste: Number,
    aroma: Number,
    overall_score: Number
  }, {
    timestamps: true
  }
);

const Ramen = mongoose.model("Ramen", RamenSchema);
const Caption = mongoose.model("Caption", CaptionSchema);

module.exports = {
  Ramen,
  Caption
}
