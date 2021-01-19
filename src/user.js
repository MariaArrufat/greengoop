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
        recipe.likes += 1;
    }

    unlikeRecipe (recipe) {
        this.likedRecipes.splice(this.likedRecipes.indexOf(recipe.name), 2);
        recipe.likes -= 1;
    }
        
}


module.exports = User