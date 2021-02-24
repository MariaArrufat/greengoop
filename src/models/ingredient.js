class Ingredient {
  constructor(name, amount, unit) {
    this.name = name
    this.amount = amount
    this.unit = unit
  }

  changeMeasurement() {
    if (this.unit == 'grams') {
      this.unit = 'pounds';  
      const num = this.amount * 0.0022046
      if (num > 1) {
        const lbs = num.toPrecision(1)
        const oz = ((num - lbs) * 16).toFixed(1)
        return `${lbs}lb ${oz}oz`
      }
      const ounces = (this.amount / 28.34952).toPrecision(2)
      return `${ounces}oz`
    }
    throw new Error('Sorry, this unit of measurement can not be converted.')
  }
}

module.exports = Ingredient
