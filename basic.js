
// variables
var ROW_MAX = 24;
var COL_MAX = 24;

var BOARDW_MAX = 500;
var BOARDH_MAX = 500;

var SQUARE = 20;

// colors
var LINECOLOR = "grey";

// create board for tracking where things are
var BOARD = [];
for (var b = 0; b < ROW_MAX + 1; b++) {
	BOARD.push(Array.apply(null, new Array(COL_MAX + 1)).map(Number.prototype.valueOf,0));
}

console.log(BOARD);
BOARD[0][0] = 1;
console.log(BOARD[0][0]);

// setting up the board

var p = 0;
var cw = BOARDW_MAX + (p*2) + 1;
var ch = BOARDH_MAX + (p*2) + 1;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawBoard () {

	context.fillStyle = 'rgb(255,255,255)';
	context.fillRect(0,0,520,520);

	for (var x = 0; x <= BOARDW_MAX; x += SQUARE) {
	  context.moveTo(0.5 + x + p, p);
	  context.lineTo(0.5 + x + p, BOARDH_MAX + p);
	}


	for (var x = 0; x <= BOARDH_MAX; x += SQUARE) {
	  context.moveTo(p, 0.5 + x + p);
	  context.lineTo(BOARDW_MAX + p, 0.5 + x + p);
	}

	context.strokeStyle = LINECOLOR;
	context.stroke();

	
}

drawBoard();

// determine blocks on the board

var blocks = []

function defineBlocks (num_blocks) {

	// add in some random blockers
	for (var i = 0; i < num_blocks; i++) {
		var row = Math.floor(Math.random()*25);
		var col = Math.floor(Math.random()*25);

			BOARD[row][col] = 1;
		
	}

	// add the middle bunch
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 7; j++) {
			BOARD[i + 9][j + 9] = 1;
		}
	}
}

defineBlocks(250);

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

draw();

function checkIfBlocked (row, col) {
	return (BOARD[row][col] != 1)
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

	draw();
}

// reset game
var reset = function () {
	player.row = 0;
	player.col = 0;
}

// update game objects


