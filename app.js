window.onload = function() {
let auto_increment = 0;
class Planet {
  constructor(centerX, centerY, radius, color, id) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    auto_increment ++;
    id = auto_increment;
    this.id = id;
    document.body.innerHTML += '<svg id="'+id+'" class="planet"></svg>';
    $("#")
  }

  // create(){
  //   let svg = document.createElement("svg");
  //   let circle = document.createElement("circle");
  //   svg.appendChild(circle);
  //   this.attr("cx", cx);
  // }
}

let container = $(".container");

let planet1 = new Planet(200, 100, 10, "white")
let planet2 = new Planet(200, 100, 10, "white")
let planet3 = new Planet(200, 100, 10, "white")
let planet4 = new Planet(200, 100, 10, "white")

} // end of window.onload = function()
