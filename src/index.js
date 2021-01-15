const User = require ('./user');
const Recipe = require ('./recipe');
const Ingredient = require ('./ingredient');

const Brownie = new Recipe ('Brownie', 'easy', '30 min', 4);
console.log(Brownie);

const Maria = new User ('Maria', 'maria@gmail.com', 'potato');
console.log(Maria);

const flour = new Ingredient('flour', 500, 'grams');
console.log(flour.amount);
console.log(flour.toPounds());