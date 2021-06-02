const net = require('net');

// establishes a connection with the game server
const connect = function(data) {
  const conn = net.createConnection({
    port: 50542, // IP address here,
    host: '135.23.222.131'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => { //get message back from server
    console.log('Message from server: ', data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

