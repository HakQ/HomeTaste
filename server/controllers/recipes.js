const express = require('express');
const models = require('../models');
const Redirect = require('../middlewares/redirect');

const router = express.Router();

router.get('/recipes', (req, res) => {
	models.Recipe.findAll().then((allRecipes) => {
		res.json({recipes : allRecipes });
});
});

module.exports = router;