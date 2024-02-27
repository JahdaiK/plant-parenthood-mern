const jwt = require("jwt-simple");
const express = require("express");
const router = express.Router();

const db = require("../models");

const config = require("../../jwt.config.js");
const user = require("../models/user.js");

/* Middleware that checks if a JWT sent from the client is valid.
   Used for all routes that require authorization
--------------------------------------------------------------- */
const authMiddleware = (req, res, next) => {
  // Check if the 'Authorization' header is present and has the token
  const token = req.headers.authorization;
  if (token) {
    try {
      // Decode the token using the secret key and add the decoded payload to the request object
      const decodedToken = jwt.decode(token, config.jwtSecret);
      req.user = decodedToken;
      next();
    } catch (err) {
      // Return an error if the token is invalid
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    // Return an error if the 'Authorization' header is missing or has the wrong format
    res
      .status(401)
      .json({ message: "Missing or invalid Authorization header" });
  }
};

//Routes:
//get
router.get("/:plantId", function (req, res) {
  db.Comment.find({ plantId: req.params.plantId }).then((comments) =>
    res.json(comments)
  );
});
//create
router.post("/", authMiddleware, (req, res) => {
  db.Comment.create({
    ...req.body,
    userId: req.user.id,
  }).then((comment) => res.json(comment));
});
//update
router.put("/:id", authMiddleware, async (req, res) => {
  const userComment = await db.Comment.findById(req.params.id);
  if (userComment.userId == req.user.id) {
    const newComment = await db.Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(newComment);
  } else {
    res.status(401).json({ message: "Invalid user or token" });
  }
});

//destroy
router.delete("/:id", authMiddleware, async (req, res) => {
  const userComment = await db.Comment.findById(req.params.id);
  if (userComment.userId == req.user.id) {
    const deletedComment = await db.Comment.findByIdAndDelete(req.params.id);
    res.send("You deleted comment " + deletedComment._id);
  } else {
    res.status(401).json({ message: "Invalid user or token" });
  }
});

module.exports = router;
