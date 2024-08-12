const Controller = require("../controllers/Controller");
var express = require("express");
const router = express.Router();

router.get("/articles", Controller.getAll);
router.get("/articles/:id", Controller.getByID);
router.delete("/articles/:id", Controller.deleteOne);
router.post("/articles", Controller.postOne);
module.exports = router;
