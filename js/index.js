function changeCanvas () {
  var canvas = document.getElementById("canvasid");canvas.style.backgroundColor = "#c3c3c3";
}

function doColor() {
  var canvas = document.getElementById("canvasid");
  var colorinput = document.getElementById("clr");
  canvas.style.backgroundColor = colorinput.value;
}