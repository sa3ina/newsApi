const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    author: String,
    source: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    puplishedAt: Date,
    category: String,
    content: String,
    id: String,
    like: Number,
    dislike: Number,
    seen: Number,
  },
  { collection: "articles" }
);

const Article = mongoose.model("articles", schema);
module.exports = Article;
