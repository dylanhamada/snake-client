const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: "50541"// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print message on successful server connection
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: DYL`);
    // setTimeout(() => {
    //   conn.write(`Move: up`);
    // }, 500);
    // setTimeout(() => {
    //   conn.write(`Move: left`);
    // }, 1000);
    // setInterval(() => {
    //   conn.write(`Move: up`);
    // }, 500);
  });
  
  // print incoming data to player
  conn.on("data", (data) => {
    console.log(`Data received: ${data}`);
  });

  return conn;
};

console.log("Connecting ...");

module.exports = connect;