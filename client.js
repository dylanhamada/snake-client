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
  });
  
  // print incoming data to player
  conn.on("data", (data) => {
    console.log(`Data received: ${data}`);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;