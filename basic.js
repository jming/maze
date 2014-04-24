
// variables
var ROW_MAX = 24;
var COL_MAX = 24;

var BOARDW_MAX = 500;
var BOARDH_MAX = 500;

var SQUARE = 20;

// colors
var LINECOLOR = "grey";

// create board for tracking where things are

// setting up the board

var p = 0;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawBoard () {

	context.fillStyle = 'rgb(255,255,255)';
	context.fillRect(0,0,520,520);
	
}

drawBoard();

// determine blocks on the board

BOARD = [
	[0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
	[1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
	[1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
	[1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
	[0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
	[1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
	[1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
	[1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
	[0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
	[0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
	[1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
]

// determine goals on the board

var goals = []

function defineGoals (num_goals, colors) {

	// loop through the colors
	for (var c = 2; c < colors.length; c++) {

		// add on the number of goals
		var j = 0;

		while (j < num_goals) {
			var row = Math.floor(Math.random()*25);
			var col = Math.floor(Math.random()*25);
			if (BOARD[row][col] == 0) {
				BOARD[row][col] = c;
				j++;
			}
		}
	}

}

var colors = ['none', LINECOLOR, 'red', 'yellow', 'green', 'blue']
defineGoals(12, colors);

// TODO: fix the board!


function drawSquares () {

	for (var row = 0; row < ROW_MAX + 1; row++) {
		for (var col = 0; col < COL_MAX + 1; col++) {

			board_value = BOARD[col][row];

			if (board_value != 0) {
				var coords = getCoordinates(row, col);
				context.fillStyle = colors[board_value];
				context.fillRect(coords.x, coords.y, SQUARE, SQUARE);
			}
		}
	}

}

drawSquares();


// get coordinates

function getCoordinates(row, col) {

	// return the right coordinates

	var x_coord = p + 1 + row*SQUARE;
	var y_coord = p + 1 + col*SQUARE;

	return {x: x_coord, y: y_coord};

}

// images
var playerReady = false;
var playerImage = new Image();
playerImage.onload = function() {
	playerReady = true;
}
playerImage.src = 'player.png'

var goalReady = false;
var goalImage = new Image();
goalImage.onload = function () {
	goalReady = true;
}
goalImage.src = 'goal.png'

// game objects
var player = {
	row: 0,
	col: 0
}

var goal = {
	row: ROW_MAX / 2,
	col: COL_MAX /2
}

// Draw everything
var draw = function () {

	drawBoard();

	// blocks
	drawSquares();

	// player
	if (playerReady) {
		var coords = getCoordinates(player.row, player.col);
		context.drawImage(playerImage, coords.y, coords.x);
	}
	
	// goals
	if (goalReady) {
		var coords = getCoordinates(goal.row, goal.col);
		context.drawImage(goalImage, coords.y, coords.x);
	}
	
}

// TODO why isn't the goal being drawn till the end??
draw();

function checkIfBlocked (row, col) {
	return (BOARD[row][col] != 1)
}

function reward (row, col) {
	var board_value = BOARD[row][col];
	if (board_value != 0) {
		BOARD[row][col] = 0;
		var color = colors[board_value];
		var loc = $('#' + color + '_num');
		loc.text(parseInt(loc.text()) + 1);
	}
}

// player input

addEventListener("keydown", keyDownHandler, true);

function keyDownHandler(event) {
	var key = event.which;

	if (key > 46) { return; }

	switch(key) {
		
		case 37: // left
			if (player.col > 0 && checkIfBlocked(player.row, player.col - 1)) {
				player.col -= 1;
			}
			break;
		
		case 38: // up 
			if (player.row > 0 && checkIfBlocked(player.row-1, player.col)) {
				player.row -= 1;
			}
			break;
		
		case 39: // right
			if (player.col < COL_MAX && checkIfBlocked(player.row, player.col + 1)) {
				player.col += 1;
			}
			break;
		
		case 40: // down
			if (player.row < ROW_MAX && checkIfBlocked(player.row+1, player.col)) {
				player.row += 1;
			}
			break;
		
		default:
			break;
	}

	// check if reward square
	reward(player.row, player.col);

	draw();
}

// reset game
var reset = function () {
	player.row = 0;
	player.col = 0;
}

// update game objects


