const express = require('express');
const router = express.Router();
const Score = require('../models/score');

router.get('/', (req,res) => {
  res.send("Hello from Turbo Typer API.");
});

router.get('/scores', (req, res, next) => {
  Score.find({}, 'score')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/scores', (req, res, next) => {
  if (req.body.score) {
    Score.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/scores/:id', (req, res, next) => {
  Score.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

module.exports = router;