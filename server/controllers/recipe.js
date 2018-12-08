const express = require('express');
const models = require('../models');
const Redirect = require('../middlewares/redirect');

const router = express.Router();
const Recipe = models.Recipe;


//return all recipes that are not check as private recipe
router.get('/public', (req, res) => { 
  Recipe.findAll({ 
    where:{
      private: false
    },
  })
  .then(allRecipes => {
    res.json(allRecipes);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});


/*find all the Recipe the user made once the user is log in*/ 
router.get('/', Redirect.ifNotLoggedIn('/login'), (req, res) => { 
  Recipe.findAll({ 
    where:{
      userId: req.user.id
    },
    include:[{
      model: models.User,
    }],
  })
  .then(allRecipes => {
    res.json(allRecipes);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});

//adding a new Recipe
router.post('/',Redirect.ifNotLoggedIn('/login'), (req, res) => {
  //using the association from sequelize
  req.user.createRecipe({
    name: req.body.name.toLowerCase(),
    calories: req.body.calories,
    time: req.body.time,
    serves: req.body.serves,
    minuteNeeded: req.body.minuteNeeded,
    description: req.body.description,
    instruction: req.body.instruction,
    ingredient: req.body.ingredient,
    private: req.body.private,
  })
  .then(Recipes => {    
    // Send created Recipes to client
    //res.json(Recipes);
    res.status(200).json( { mgs: "successfully Created" } );
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});

//update Recipe
router.put('/', Redirect.ifNotLoggedIn('/login'), /*Redirect.ifNotAuthorized('/Recipe'),*/(req, res) => {
  Recipe.update({
    name: req.body.name.toLowerCase(),
    creator: req.user.username,
    description: req.body.description,
    instruction: req.body.instruction,
    likes: req.body.likes,
    label: req.body.label,
    ingredient: req.body.ingredient,
    private: req.body.private,
  }, 
  { 
    where: {
      name: req.body.name.toLowerCase(),
      userId: req.user.id,
    },
    include: [{
      model: models.User,
      where:{
        username:req.user.username,
      },
    }],
  })
  .then(() => {
      res.status(200).json( { mgs: "Updated Successfully"} );
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});

//delete  Recipe
router.delete('/', Redirect.ifNotLoggedIn('/login'), /*Redirect.ifNotAuthorized('/posts'),*/ (req, res) => {
  Recipe.destroy({
    where: {
      name: req.body.name,
      userId: req.user.id,
    },
    include: [{
      model: models.User,
      where: {
        username: req.user.username,
      },
    }],
  })
  .then(() => {
    res.status(200).json( { msg: "Deleted Successfully"} );
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
  });
});

module.exports = router;