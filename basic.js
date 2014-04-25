var IS_EXPERT = true;


// variables
var ROW_MAX = 24;
var COL_MAX = 24;

var BOARDW_MAX = 500;
var BOARDH_MAX = 500;

var SQUARE = 20;

// var NUM_GOALS = 12;
var MAX_ACTIONS =150;

// colors
var LINECOLOR = "grey";

BOARD = [
	[0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
	[1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
	[1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
	[1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
	[1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
	[0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
	[1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
	[1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
	[1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
	[0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
	[1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
	[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
	[1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
]

PATTERN_A = [[9,13], [10,10], [11,11], [11,12], [12,13], [13,9], [13,15], [14, 12], [15,9], [15, 11], [15, 15]];
PATTERN_B = [[9,15], [10,11], [10,12], [10,14], [12,11], [13,11], [13,13], [14,15], [15,10], [15,14]];
PATTERN_C = [[9,10], [9,12], [10,9], [10,13], [10,15], [11,9], [12,15], [13,12], [14,10], [14,13], [14,14]];
PATTERN_D = [[9,9], [9,14], [11,10], [11,14], [11,15], [12,9], [13,10], [13,14], [14,9], [15,12]];
PATTERN_E = [[9,11], [11,13], [12,10], [12,14], [14,11], [15,13]];

var goals = []
var colors = ['none', LINECOLOR, 'red', 'yellow', 'green', 'blue']
var colors_distr = [0, 0, 14, 6, 6, 10];
var actions = []
var actions_categories = Array.apply(null, new Array(colors.length)).map(Number.prototype.valueOf, 0);
var goal_order = []

var pattern_order = [];
var patterns = ['pattern_a', 'pattern_b', 'pattern_c', 'pattern_d', 'pattern_e'];
var PATTERNS_CAPS = [PATTERN_A, PATTERN_B, PATTERN_C, PATTERN_D, PATTERN_E];

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



// determine goals on the board

function defineGoals (colors) {

	// loop through the colors
	for (var c = 2; c < colors.length; c++) {

		// add on the number of goals
		var j = 0;

		while (j < colors_distr[c]) {
			var row = Math.floor(Math.random()*25);
			var col = Math.floor(Math.random()*25);
			if (BOARD[row][col] == 0 && row != 12 && col != 12 && row != 0 && col != 0) {
				BOARD[row][col] = c;
				j++;
			}
		}
	}

}

defineGoals(colors);
console.log('board', BOARD);

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

function drawHints() {
	if (IS_EXPERT) {
		for (var p = 0; p < patterns.length; p++) {

			if (!(pattern_order.indexOf(p) > -1)) {
				var pattern = PATTERNS_CAPS[p];

				for (var i = 0; i < pattern.length; i++) {
					var coords = pattern[i];
					if (BOARD[coords[0]][coords[1]] == 1) {
						// render the letter on the square
						var letter = patterns[p].slice(-1).toUpperCase();
						var letter_coords = getCoordinates(coords[0], coords[1]);
						context.font = '16px Open Sans';
						context.fillStyle = 'black';
						context.fillText(letter, letter_coords.y+SQUARE*1/5, letter_coords.x+SQUARE*4/5);
					}
				}
			}
		}
	}
}

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

	drawHints();

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

function checkIfGoal (row, col) {

	// in middle, end the game
	if (row == 12 && col == 12) {

		alert("Congrats! You have completed the game!");
		endGame();

	}

	// check if colored square
	var board_value = BOARD[row][col];

	if (board_value != 0) {

		// update the score
		BOARD[row][col] = 0;
		var color = colors[board_value];
		var loc = $('#' + color + '_num');
		loc.text(parseInt(loc.text()) + 1);

		// log the goal_order
		goal_order.push(board_value);

		actions_categories[board_value] += 1;
	}

	// check if patterns obtained
	checkPatterns();

}

function checkPatterns() {

	var pattern = null;
	var tiles = [];
	var pattern_num = null;

	// var colors = ['none', LINECOLOR, 'red', 'yellow', 'green', 'blue']

	// one of each
	if (actions_categories[2] > 0 
		&& actions_categories[3] > 0 
		&& actions_categories[4] > 0 
		&& actions_categories[5] > 0) {
		pattern = PATTERN_A;
		tiles = [2, 3, 4, 5];
		pattern_num = 0; 
	}

	// 4 of 2
	if (actions_categories[2] > 3) {
		pattern = PATTERN_B;
		tiles = [2, 2, 2, 2];
		pattern_num = 1;
	}

	if (actions_categories[2] > 1 
		&& actions_categories[3] > 1) {
		pattern = PATTERN_C;
		tiles = [2, 2, 3, 3];
		pattern_num = 2;
	}

	if (actions_categories[4] > 1
		&& actions_categories[5] > 1) {
		pattern = PATTERN_D;
		tiles = [4, 4, 5, 5];
		pattern_num = 3; 
	}

	if (actions_categories[5] > 1
		&& actions_categories[2] > 1) {
		pattern = PATTERN_E;
		tiles = [2, 2, 5, 5];
		pattern_num = 4;
	}
	

	if (pattern 
		&& tiles.length > 0 
		&& !(pattern_order.indexOf(pattern_num) > -1)) {

		alert('You have attained a combination!');
		$( "#pattern" ).dialog();

		// console.log('pattern', pattern);

		// track that a pattern has been used
		pattern_order.push(pattern_num);
		
		// color in the pattern used
		$('#' + patterns[pattern_num]).append('<b>X</b>');
		// var rects = $('#' + patterns[pattern_num] + ' svg rect');
		// for (var h = 0; h < rects.length; h++) {
		// 	rects[h].style.fill = LINECOLOR;
		// }

		// fix blocks in patterns
		for (var i = 0; i < pattern.length; i++) {
			var elt = pattern[i];
			BOARD[elt[0]][elt[1]] = 0;
		}

		// fix number of colored tiles
		for (var j = 0; j < tiles.length; j++) {
			var color = colors[tiles[j]];

			// display
			var loc = $('#' + color + '_num');
			loc.text(parseInt(loc.text()) - 1);

			// stored value
			actions_categories[tiles[j]] -= 1;
		}
	}
	
	

}

function addAction (key) {

	// add to tracking actions
	actions.push(key);

	console.log(actions_categories);

	var loc = $('#num_steps');
	loc.text(parseInt(loc.text()) + 1);

	// make sure not too many actions
	if (actions.length == MAX_ACTIONS) {

		alert("Oh no! You used too many steps. Please try again.");
		endGame();

	}
}

function endGame () {

	context.fillStyle = LINECOLOR;
	context.fillRect(0,0,520,520);
	
	// print actions
	console.log('actions', actions);
	console.log('goal_order', goal_order);
	console.log('patterns', pattern_order);

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

	// log the action
	addAction(key);

	// check if reward square
	checkIfGoal(player.row, player.col);

	draw();

}

// reset game
var reset = function () {
	player.row = 0;
	player.col = 0;
}

// update game objects


