class Ingredient {
    constructor (name, amount, unit) {
        this.name = name
        this.amount = amount
        this.unit = unit
    }
    changeMeasurement() {
        if (this.unit == 'grams') {
            let num = this.amount * 0.0022046;
            if (num > 1) {
            let lbs = num.toPrecision(1);
            let oz = (num-(lbs*16)).toFixed(1); 
            return `${lbs}lb ${oz}oz`;
            } else {
            let ounces = (this.amount/28.34952).toPrecision(2);
            return `${ounces}oz`;
            }
        } else {
            throw new Error ("Sorry, this unit of measurement can not be converted.");
        }
    } 
}

module.exports = Ingredient
