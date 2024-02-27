const jwt = require('jwt-simple')
const express = require("express");
const router = express.Router();

const db = require("../models");

//Routes:
//get
router.get("/:plantId", function (req, res) {
  db.Comment.find({ plantId: req.params.plantId }).then((comments) =>
    res.json(comments)
  );
});
//create
router.post("/", (req, res) => {
  db.Comment.create(req.body).then((comment) => res.json(comment));
});
//update
router.put("/:id", (req, res) => {
  db.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (comment) => res.json(comment)
  );
});
//destroy
router.delete("/:id", (req, res) => {
  db.Comment.findByIdAndDelete(req.params.id).then(() =>
    res.json({ deletedCommentId: req.params.id })
  );
});

module.exports = router;
