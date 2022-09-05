//Create a rectangle object with length and width properties
//Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle={
  l:10,
  b:25,
  area: function(){
    return this.l*this.b;
  },
  peri: function(){
    return 2*(this.l+this.b);
  }
};
let area=rectangle["area"]();
console.log(area);
let peri=rectangle["peri"]();
console.log(peri);