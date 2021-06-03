const { MoveUp, MoveDown, MoveRight, MoveLeft, Greeting} = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  stdin.on("data",handleUserInput);

  stdin.resume();
  return stdin;
};

const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  }

  if (input === MoveUp) {
    connection.write("Move: up");
  }
  if (input === MoveRight) {
    connection.write("Move: right");
  }
  if (input === MoveDown) {
    connection.write("Move: down");
  }
  if (input === MoveLeft) {
    connection.write("Move: left");
  }
  if (input === Greeting) {
    connection.write("Say: hi~");
  }
};

module.exports = {setupInput};