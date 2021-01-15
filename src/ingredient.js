class Ingredient {
    constructor (name, amount, unit) {
        this.name = name
        this.amount = amount
        this.unit = unit
    }
    toPounds() {
        let num = this.amount * 0.0022046;
        if (num > 1) {
            let lbs = num.toPrecision(1);
            let oz = (num-(lbs*16)).toFixed(1); 
            return `${lbs}lb ${oz}oz`;
        } else {
            let ounces = (this.amount/28.34952).toPrecision(2);
            return `${ounces}oz`;
        }
    } 
}

module.exports = Ingredient
