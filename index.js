// import { pipeline } from "stream";

// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let perimeter = 0
        for (let i of this.sides){
            perimeter += i
        }
        return perimeter
    }
}

class Triangle extends Polygon{
    get isValid(){
        let sideA = this.sides[0]
        let sideB = this.sides[1]
        let sideC = this.sides[2]

        return (sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA)
    }
}

class Square extends Polygon{
    get isValid(){
        let sideA = this.sides[0]
        let sideB = this.sides[1]
        let sideC = this.sides[2]
        let sideD = this.sides[2]

        return (sideA === sideB) && (sideB === sideC) && (sideC === sideD) && (sideD === sideA)
    }

    get area(){
        return this.sides[0] * this.sides[0]
    }
}