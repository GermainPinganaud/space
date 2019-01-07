window.onload = function() {

class Circle {
  constructor(centerX, centerY, radius, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
  }
}

let container = $(".container")


let homePlanet = $(".planet").children()

console.log(homePlanet.attr("cx"));
homePlanet.attr("cx", 1000)
console.log(homePlanet.attr("cx"));

let planet = new Circle(100, 100, 10, "white")

} // end of window.onload = function()
