class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`Perimeter of ${this.name}: ${perimeter}`);
  }
}

const squareshape = new Shape("square", 4, 5);
squareshape.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    const area = this.sideLength * this.sideLength;
    console.log(`Area of square: ${area}`);
  }
}

const square = new Square(5);


square.calcPerimeter();
square.calcArea();


class Triple {
  static customName = "Tripler";
  static description = "triple provided number";

  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static description = "square the triple of the provided number";
  static longDescription;

  static calculate(n) {
    const tripleResult = super.calculate(n);
    return tripleResult * tripleResult;
  }
}

console.log(Triple.description);
console.log(Triple.calculate()); 
console.log(Triple.calculate(6)); 

console.log(SquaredTriple.calculate(3)); 
console.log(SquaredTriple.description); 
console.log(SquaredTriple.longDescription);
console.log(SquaredTriple.customName);