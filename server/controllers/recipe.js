const express = require('express');
const models = require('../models');
const Redirect = require('../middlewares/redirect');
const getSlug = require('speakingurl');
const router = express.Router();
const Recipe = models.Recipe;


//find all the Recipe
router.get('/', (req, res) => { 
  Recipe.findAll().then(Recipes => {
      res.json(Recipes);
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    });
});



//find by id
router.get('/:id', (req, res) => { 
  const id = req.params.id;
  Recipe.findAll( 
      { where: {id: id} }).then((Recipes) => {
        res.status(200).json(Recipes);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
});

//adding a new Recipe
router.post('/', (req, res) => {
  Recipe.create(req.body).then(Recipes => {    
      // Send created Recipes to client
      res.json(Recipes);
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    });
});

//update Recipe
router.put('/:id', (req, res) => {
  const id = req.params.id;
  Recipe.update( req.body, 
      { where: {id: id} }).then(() => {
        res.status(200).json( { mgs: "Updated Successfully -> Customer Id = " + id } );
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
});

//delete  Recipe
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Recipe.destroy({
      where: { id: id }
    }).then(() => {
      res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    });
});

module.exports = router;