// require map of keys
const { keyMap } = require('./constants');

// to initialize and continue automatic snake movement
const snakeMoves = {
  isMoving: false,
  currentDirection: undefined
};
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // end process when user presses ctrl + c
  if (key === '\u0003') {
    process.exit();
  }

  // if pressed key exists in keyMap object
  if (keyMap[key]) {
    // regex to match keys "q", "e", or "r"
    const regex = /[qer]/gi;

    // write to server, sending pressed key
    connection.write(keyMap[key]);
    // if key is not one of the keys designated to send a chat message
    if (regex.test(key) === false) {
      // set the current direction of the snake for automatic movement
      snakeMoves.currentDirection = keyMap[key];
    }
    
    // if snake is formerly not moving, start automatic movement
    if (!snakeMoves.isMoving) {
      snakeMoves.isMoving = true;
      moveAutomatically();
    }
  }
};

// automatically move the snake as soon as user presses a movement key
const moveAutomatically = function () {
  setInterval(() => {
    connection.write(snakeMoves.currentDirection);
  }, 500);
};


module.exports = setupInput;