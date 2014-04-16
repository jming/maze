
// variables
ROW_MAX = 24;
COL_MAX = 24;

BOARDW_MAX = 500;
BOARDH_MAX = 500;

SQUARE = 20;

// colors
LINECOLOR = "grey";

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

function drawSquares (squares) {
	
	for (var i = 0; i < squares.length; i++) {
		var coords = getCoordinates(squares[i].row, squares[i].col);
		context.fillStyle = squares[i].color;
		context.fillRect(coords.x, coords.y, SQUARE, SQUARE);
	}
}

// determine blocks on the board

var blocks = []

function defineBlocks (num_blocks) {

	// add in some random blockers
	for (var i = 0; i < num_blocks; i++) {
		blocks.push({color: LINECOLOR, row: Math.floor(Math.random()*25), col: Math.floor(Math.random()*25)})
	}

	// add the middle bunch
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 7; j++) {
			blocks.push({color: LINECOLOR, row: 9+i, col: 9+j})
		}
	}
}

defineBlocks(250);

drawSquares(blocks);

// determine goals on the board

var goals = []

function defineGoals (num_goals, colors) {
	for (var i = 0; i < colors.length; i++) {
		var color = colors[i];
		for (var j = 0; j < num_goals; j++) {
			goals.push({color: color, row: Math.floor(Math.random()*25), col: Math.floor(Math.random()*25)})
		}
	}
}

defineGoals(12, ['red', 'yellow', 'green', 'blue'])

drawSquares(goals);

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
	drawSquares(blocks);
	drawSquares(goals);

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

// player input

addEventListener("keydown", keyDownHandler, true);

function keyDownHandler(event) {
	var key = event.which;

	if (key > 46) { return; }

	switch(key) {
		
		case 37: // left
			if (player.col > 0) {
				player.col -= 1;
			}
			break;
		
		case 38: // up 
			if (player.row > 0) {
				player.row -= 1;
			}
			break;
		
		case 39: // right
			if (player.col < COL_MAX) {
				player.col += 1;
			}
			break;
		
		case 40: // down
			if (player.row < ROW_MAX) {
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


