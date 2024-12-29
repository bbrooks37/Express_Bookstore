const express = require("express");
const Genre = require("../models/genre");
const router = new express.Router();

router.get("/", async function (req, res, next) {
  try {
    const genres = await Genre.findAll();
    return res.json({ genres });
  } catch (err) {
    return next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const genre = await Genre.create(req.body);
    return res.status(201).json({ genre });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
