const User = require('./user')
const Recipe = require('./recipe')
const Ingredient = require('./ingredient')
const Comments = require('./comments');

const Brownie = new Recipe('Brownie', 'easy', '30 min', 1)
const Salad = new Recipe('Salad', 'Easy', '10 min', 2)
const Soup = new Recipe ('Soup', 'Easy', '40 min', 4)

const Maria = new User('Maria', 'maria@gmail.com', 'potato')
const Tyson = new User ('Tyson', 'tysonlaa@gmail.com', 'averyhardpssw')
const Teresa = new User ('Tere', 'terew@hotmail.com', 'ilikepink')
const chocolate = new Ingredient('chocolate', 200, 'grams')
const flour = new Ingredient('flour', 500, 'grams', 'grams')
const firstComment = new Comments (Brownie, Maria, 'These look yummy!')

Maria.likeRecipe(Brownie)
Maria.likeRecipe(Salad)
Tyson.likeRecipe(Salad)
Maria.unlikeRecipe(Salad)
Teresa.likeRecipe(Salad)
Teresa.likeRecipe(Soup)

Brownie.addIngredients(chocolate, flour)
Brownie.addDiet('Vegetarian, GF')

/* console.log(Brownie)
console.log(Salad)
console.log(firstComment) */

Brownie.showDetail();
Brownie.adjustServings(2);
console.log(Brownie)
Brownie.showDetail();

// Most liked recipes: 
const allRecipes = [Brownie, Salad, Soup]
allRecipes.sort((a, b) => (b.likes > a.likes) ? 1 : -1);
allRecipes.forEach((r) => {console.log(r.name);});