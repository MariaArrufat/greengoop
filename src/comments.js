const now = new Date()
let month = now.getMonth() + 1
if (month < 9) {
  month = `0${month}`
}
let day = now.getDate()
if (day < 9) {
  day = `0${day}`
}

class Comments {
  constructor(recipe, user, comment) {
    this.recipe = recipe.name
    this.user = user.name
    this.date = `${day}/${month}/${now.getFullYear()}`
    this.comment = comment
    this.myPic = []
  }

  addPic(pic) {
    this.myPic.push(pic)
  }
}

module.exports = Comments
