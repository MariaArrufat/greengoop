class Recipe {
    constructor (name, difficulty, time, serves) {
        this.name = name
        this.difficulty = difficulty
        this.time = time
        this.serves = serves
        this.ingredients = []
        this.method = []
        this.photo = "default.jpg"
        this.diet = []
        this.likes = 0
    }
    addIngredients (ingredient) {
        this.ingredients.push(ingredient);
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
}

module.exports = Recipe