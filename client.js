const net = require('net');
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function(data) {
  const conn = net.createConnection({
    port: PORT, // ,PORT number here,
    host: IP// IP address here
  },() => {
    console.log("Successfully connected to game server");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => { //get message back from server
    console.log('Message from server: ', data);
  });
  
  conn.on('connect', () => {
    conn.write("Name:YSY");
    //conn.write("Move: up");
  });

  return conn;
};

module.exports = { connect };