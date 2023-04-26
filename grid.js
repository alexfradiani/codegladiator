const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Set the size of the canvas
canvas.width = 800;
canvas.height = 600;

// Define the size of each square
const squareSize = 50;

// Define the colors to use for the grid lines and squares
const gridLineColor = 'rgba(100, 100, 100, 0.5)';
const squareColor = 'rgba(200, 200, 200, 0.5)';

// Loop through each row and column of the grid
for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    // Calculate the x, y coordinates of the top-left corner of the current square
    const offsetX = x * squareSize;
    const offsetY = y * squareSize;

    // Draw the square
    context.fillStyle = squareColor;
    context.fillRect(offsetX, offsetY, squareSize, squareSize);

    // Draw the grid lines
    context.strokeStyle = gridLineColor;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    context.lineTo(offsetX + squareSize, offsetY);
    context.lineTo(offsetX + squareSize, offsetY + squareSize);
    context.lineTo(offsetX, offsetY + squareSize);
    context.closePath();
    context.stroke();
  }
}
