const fs = require('fs');
const User = require('./user')
const Recipe = require('./recipe')
const Ingredient = require('./ingredient')
const Comments = require('./comments');

const Brownie = new Recipe('Brownie', 'easy', '30 min', 1)
const Salad = new Recipe('Salad', 'Easy', '10 min', 2)
const Soup = new Recipe ('Soup', 'Easy', '40 min', 4)

const Maria = new User({ name: 'Maria', email: 'maria@gmail.com', pssw: 'potato'}) //Create object acording to the schema so it can be stored as an object.
const Tyson = new User ({ name: 'Tyson', email: 'tysonlaa@gmail.com', pssw: 'averyhardpssw'})
const Teresa = new User ({ name: 'Tere', email: 'terew@hotmail.com', pssw: 'ilikepink'})
const chocolate = new Ingredient('chocolate', 200, 'grams')
const flour = new Ingredient('flour', 500, 'grams', 'grams')
const firstComment = new Comments (Brownie, Maria, 'These look yummy!')

await Maria.save() //User gets saved into the database
await Tyson.save()
await Teresa.save()

Maria.likeRecipe(Brownie)
Maria.likeRecipe(Salad)
Tyson.likeRecipe(Salad)
Maria.unlikeRecipe(Salad)
Teresa.likeRecipe(Salad)
Teresa.likeRecipe(Soup)

Brownie.addIngredients(chocolate, flour)
Brownie.addDiet('Vegetarian, GF')

console.log(Brownie)
console.log(Salad)
console.log(firstComment)

Brownie.showDetail();
Brownie.adjustServings(2);
console.log(Brownie)
Brownie.showDetail();

// Most liked recipes: 
const allRecipes = [Brownie, Salad, Soup]
allRecipes.sort((a, b) => (b.likes > a.likes) ? 1 : -1);
allRecipes.forEach((r) => {console.log(r.name);});

//Async class
function readLocalFile(filename) {
    fs.readFile(`${__dirname}/${fileName}`, "utf8", (err, data) => {
        if (err) throw new Error(err);
        log(data);
    })
};

/*function readLocalFile(filename, encoding, callback) {
    fs.readFile(`${__dirname}/${fileName}`, encoding, callback)
} */

readLocalFile(`${fileName}`, 'utf8', (err, data) => console.log(data));