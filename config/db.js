const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sabi:pass@news.zuetn.mongodb.net/?retryWrites=true&w=majority&appName=news"
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("err", err));
