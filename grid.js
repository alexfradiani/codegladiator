// Create a canvas element
var canvas = document.getElementById("canvas");

// Set the canvas size
canvas.width = 400;
canvas.height = 400;

// Create a new Isomer instance
var iso = new Isomer(canvas);

// Define the grid dimensions
var gridWidth = 8;
var gridHeight = 8;

// Define the size of each square
var squareSize = 20;

// Define the color of the grid lines
var gridColor = new Isomer.Color(128, 128, 128);

// Draw the grid
for (var i = 0; i < gridWidth; i++) {
  for (var j = 0; j < gridHeight; j++) {
    var x = i * squareSize;
    var y = j * squareSize;
    var z = 0;

    // Draw the square
    var square = new Isomer.Shape.Prism(
      new Isomer.Point(x, y, z),
      squareSize,
      squareSize,
      squareSize
    );
    iso.add(square);

    // Draw the grid lines
    var vertices = square.vertices;
    for (var k = 0; k < vertices.length; k++) {
      var nextIndex = (k + 1) % vertices.length;
      var vertex = vertices[k];
      var nextVertex = vertices[nextIndex];

      var line = new Isomer.Path([
        vertex,
        nextVertex
      ]);
      line.color = gridColor;
      iso.add(line);
    }
  }
}
