const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print message on successful server connection
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: DYL`);
  });
  
  // print incoming data to player
  conn.on("data", (data) => {
    console.log(`Data received: ${data}`);
  });

  return conn;
};

console.log("Connecting ...");

module.exports = connect;