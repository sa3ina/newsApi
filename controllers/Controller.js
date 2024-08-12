const Article = require("../models/Model");
const getAll = async (req, res) => {
  const posts = await Article.find();
  res.send(posts);
};
const getByID = async (req, res) => {
  const posts = await Article.findOne({ id: req.params.id });
  res.send(posts);
};
const deleteOne = async (req, res) => {
  await Article.deleteOne({ id: req.params.id });
  res.status(204).send();
};
const postOne = async (req, res) => {
  const post = await Article(req.body);
  await post.save();
  res.send(post);
};
module.exports = { getAll, getByID, deleteOne, postOne };
