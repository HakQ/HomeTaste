const express = require('express');
const models = require('../models');

const router = express.Router();
const Meal = models.Meal;



router.get('/', (req, res) => { 
  Meal.findAll().then(meals => {
      res.json(meals);
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    });
});

router.post('/', (req, res) => {
  Meal.create(req.body).then(meals => {    
      // Send created meals to client
      res.json(meals);
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    });
});

router.put('/:id', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route",
    id: req.params.id
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});

module.exports = router;