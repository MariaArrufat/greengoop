var express = require('express');
var router = express.Router();

var recipes = [

]

/* GET recipes listing. */
router.get('/', function(req, res, next) {
  if (req.query.name) {
    return res.send(recipes.find(recipe => recipe.name == req.query.name))
  }
  res.send(recipes);
});

/* GET specific recipe. */
router.get('/:recipeId', function(req, res, next) {
  const recipe = recipes[req.params.recipeId]
  if (recipe) res.send(recipe)
  else res.sendStatus(404) // else next(new Error('User not found'))
})

module.exports = router;