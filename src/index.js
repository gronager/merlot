import Two from "two.js";

var elem = document.getElementById("app");

var params = { width: 285, height: 200 };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var circle = two.makeCircle(75, 100, 50);
var rect = two.makeRectangle(213, 100, 100, 100);

// The object returned has many stylable properties:
circle.fill = "#FF80FF";
circle.stroke = "orangered"; // Accepts all valid css color
circle.linewidth = 5;

rect.fill = "rgb(0, 200, 255)";
rect.opacity = 0.75;
rect.noStroke();

// Don't forget to tell two to render everything
// to the screen
two.update();
