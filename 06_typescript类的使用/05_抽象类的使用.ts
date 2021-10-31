abstract class Shape {
  abstract getAera(): any;
}

class Circle extends Shape {
  private _r: number;
  constructor(r:number) {
    super();
    this._r = r;
  }

  getAera() {
    return (this._r*this._r*Math.PI).toFixed(2);
  }

}

class Rectangle extends Shape {
  private _x: number;
  private _y: number;
  constructor(x: number,y: number) {
    super();
    this._x = x;
    this._y = y;
  }

  getAera() {
    return (this._x * this._y).toFixed(2);
  }
}

const circle = new Circle(5);
console.log(circle.getAera());
const rectangle = new Rectangle(5,5);
console.log(rectangle.getAera());

