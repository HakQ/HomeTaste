const express = require('express');
const models = require('../models');
const Redirect = require('../middlewares/redirect');

const router = express.Router();
const Meal = models.Meal;
const Recipe = models.Recipe;
const MealRecipe = models.MealRecipe;


/*find all the meal the user made once the user is log in*/ 
router.get('/', Redirect.ifNotLoggedIn('/login'), (req, res) => { 
  Meal.findAll({ 
    where:{
      userId: req.user.id
    },
    include:[{
      model: models.User,
      model: models.Recipe,
    }],
  })
  .then(allMeals => {
    res.json(allMeals);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});

//adding a new meal
router.post('/',Redirect.ifNotLoggedIn('/login'), (req, res) => {
  //using the association from sequelize
  req.user.createMeal(
  {
    name: req.body.name.toLowerCase(),
    comment: req.body.comment,
    time: req.body.time
  }, 
  {
    include: [Recipe]
  })
  .then(mealRecipe => {    
    // Send created meals to client
    //res.json(meals);
    res.status(200).json( { mgs: "successfully Created" } );
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});

/*  
  Jin's Code
  return req.user.createMeal({
    name: req.body.name.toLowerCase(),
    comment: req.body.comment,
    time: req.body.time
  }, {
    include: [Recipe]
  })
  .then(meal => meal.addRecipe([1]))
  .then(mealRecipe => {    
    // Send created meals to client
    //res.json(meals);
    res.status(200).json( { mgs: "successfully Created" } );
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});*/

//update Meal
router.put('/', Redirect.ifNotLoggedIn('/login'), /*Redirect.ifNotAuthorized('/meal'),*/(req, res) => {
  Meal.update({
      name: req.body.name.toLowerCase(),
      comment: req.body.comment,
      time: req.body.time
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

//delete  Meal
router.delete('/', Redirect.ifNotLoggedIn('/login'), /*Redirect.ifNotAuthorized('/posts'),*/ (req, res) => {
  Meal.destroy({
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

/****************ASSOCIATING RECIPE WITH MEAL**********/
router.get('/:id/recipe',Redirect.ifNotLoggedIn('/login'), (req, res) => {
  return Meal.findOne({
    where:{
      id: req.params.id,
      userId: req.user.id,
    }
  })
  .then(meal => {
    return meal.getRecipes()
  })
  .then(asRecipe => {
    res.json(asRecipe)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});

//creating an association between meal and recipe
router.put('/:id/recipe/:rId',Redirect.ifNotLoggedIn('/login'), (req, res) => {
  return Meal.findOne({
    where:{
      id: req.params.id,
      userId: req.user.id,
    },
    include:[{
      model: models.Recipe,
    }],
  })
  .then(meal => {
    //res.json(meal)
    //console.log('-----meal', meal.Recipe)
    return meal.addRecipe([2]);
  })
  .then(result=>{
    res.json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
});


module.exports = router;