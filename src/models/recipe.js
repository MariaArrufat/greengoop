const convert = require('convert-units')
const mongoose = require ('mongoose')

const recipeSchema = new mongoose.Schema({
    name: String,
    difficulty: String,
    time: String,
    serves: Number, 
    ingredients: [],
    method: [],
    photo: [],
    diet: [],
    likes: number 

})

module.exports = mongoose.model('Recipe', recipeSchema)

class Recipe {
    /*constructor (name, difficulty, time, serves) {
        this.name = name
        this.difficulty = difficulty
        this.time = time
        this.serves = serves
        this.ingredients = []
        this.method = []
        this.photo = "default.jpg"
        this.diet = []
        this.likes = 0
    }*/

    addIngredients (ingredient) {
        this.ingredients.push(ingredient);
    }

    showDetail () {
        this.ingredients.forEach(ingredient => {
            if (ingredient.unit == 'grams') {
                console.log(`${ingredient.amount*this.serves}g ${ingredient.name}`);
            } else if (ingredient.unit == 'pounds') {
                console.log(`${ingredient.amount*this.serves}lbs ${ingredient.name}oz`);
            } else {
                console.log(`${ingredient.amount*this.serves} ${ingredient.name}`);
            }
        });
    }

    adjustServings (newServ) {
        this.serves = newServ;
    }

    addMethod (method) {
        this.method.push(method);
    }

    addPhoto (photo) {
        this.photo.push(photo);
    }

    addDiet (diet) {
        this.diet.push(diet); // Gluten free, Vegetarian, Vegan, Lactose Free, Raw
    }

    convertUnit () {
        this.ingredients.forEach(ingredient => {
            if (ingredient.unit == 'grams') {
                convert(ingredient.amount).from('g').to('lb'); // fix - or to oz, depending on the weight
            } else if (ingredient.unit == 'pounds') {
                convert(ingredient.amount).from('lb').to('g');
            } else if (ingredient.unit == 'ml' || 'l'){
                convert(ingredient.amount).from('ml' || 'l').to('fl-oz');
            } else if (ingredient.unit == 'fl-oz'){
                convert(ingredient.amount).from('fl-oz').to('ml'); // fix - or to liters depending on the volume!
            }
    });
  }
}

recipeSchema.loadClass(Recipe)

module.exports = Recipe
