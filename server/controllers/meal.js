const express = require('express');
const models = require('../models');
const Redirect = require('../middlewares/redirect');
const getSlug = require('speakingurl');

const router = express.Router();
const Meal = models.Meal;


//find all the meal
router.get('/', (req, res) => { 
  Meal.findAll({
    include:[{model: models.User}]
  })
  .then(allMeals => {
      res.json(allMeals);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
  });
});


//find by id
router.get('/:id', (req, res) => { 
  const id = req.params.id;
  Meal.findAll( 
      { where: {id: id} }).then((meals) => {
        res.status(200).json(meals);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
});

//adding a new meal
router.post('/',Redirect.ifNotLoggedIn('/login'), (req, res) => {
  Meal.create(req.body).then(meals => {    
      // Send created meals to client
      res.json(meals);
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    });
});


//update Meal
router.put('/:id', (req, res) => {
  const id = req.params.id;
  Meal.update( req.body, 
      { where: {id: id} }).then(() => {
        res.status(200).json( { mgs: "Updated Successfully -> Customer Id = " + id } );
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
});

//delete  Meal
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Meal.destroy({
      where: { id: id }
    }).then(() => {
      res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    });
});

module.exports = router;