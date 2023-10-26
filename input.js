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
  if (key === '\u0003') {
    process.exit();
  }

  const keyMap = {
    "\u0077": "Move: up",
    "\u0061": "Move: left",
    "\u0073": "Move: down",
    "\u0064": "Move: right",
    "\u0071": "Say: IT'S ME DYLAN!",
    "\u0065": "Say: I'M THE BEST!",
    "\u0072": "Say: CAN'T CATCH ME!"
  };

  connection.write(keyMap[key]);
};

module.exports = setupInput;