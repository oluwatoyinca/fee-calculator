export class Leaf {
    constructor(name, description, quantity, unitPrice, surCharge) {
      this.name = name
      this.description = description
      this.quantity = parseInt(quantity)
      this.unitPrice = parseFloat(unitPrice)
      this.surCharge = [surCharge[0], surCharge[1]/100]
    }

    fee() {
        const subFee = this.quantity * this.unitPrice
        const subCharge = subFee * this.surCharge[1]
        return this.surCharge[0] === 'add' ? (subFee + subCharge) : (subFee - subCharge)
    }
}