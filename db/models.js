const mongoose = require('./connection.js');

const RamenSchema = new mongoose.Schema (
  {
    type: String,
    nutr_label_pic: String,
    image_url: String,
    taste: Number,
    aroma: Number,
    overall_score: Number,
    summary: String,
    comments: [CommentSchema]
  },
  {
    timestamps: true
  }
)

const CommentSchema = new mongoose.Schema (
  {
    author: String,
    comment: String,
    taste: Number,
    aroma: Number,
    overall_score: Number,
  }, {
    timestamps: true
  }
)
