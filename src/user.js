const Recipe = require ('./recipe');

class User {
    constructor (name, email, pssw) {
        this.name = name
        this.email = email
        this.pssw = pssw
        this.profilePic = "defaultPic.jpg"
        this.likedRecipes = []
    }
    addProfilePic (pic) {
        this.profilePic.push(pic);
    }
    likeRecipe (recipe) {
        this.likedRecipes.push(recipe.name);
        recipe.likes++;
    }
}

module.exports = User