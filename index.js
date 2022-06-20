// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let sum = 0
    this.sides.forEach((side) => sum += side)
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if(this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1] ) {
      return true
    }else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    const result = this.sides.every((element)  => {
      if(element === this.sides[0]) {
        return true
      } else {
        return false
      }
    })
    return result
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}