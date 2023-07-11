export class Node {
    constructor(name) {
      this.name = name
      this.descendants = {}
    }

    fee() {
        let sum = 0
        for (let x in this.descendants) {
            sum = sum + this.descendants[x].fee()
        }
        return sum
    }
}