const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pssw: String,
    profilePic: [],
    likedRecipes: []
})

/*userSchema.methods = {                    <- A way to declare methods. Not needed since we do it through a class down below
    addProfilePic (pic) {
        this.profilePic.push(pic);
    },
    likeRecipe (recipe) {
        this.likedRecipes.push(recipe.name);
        recipe.likes += 1;
    },
    unlikeRecipe (recipe) {
        this.likedRecipes.splice(this.likedRecipes.indexOf(recipe.name), 2);
        recipe.likes -= 1;
    }
}*/

module.exports = mongoose.model('User', userSchema)

class User {
    /*constructor (name, email, pssw) {         <- Not needed anymore since it's already defined in userSchema
        this.name = name
        this.email = email
        this.pssw = pssw
        this.profilePic = "defaultPic.jpg"
        this.likedRecipes = []
    }*/ 

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

userSchema.loadClass(User)

module.exports = User