const express = require("express");
const http = require("http");
const { ExpressPeerServer } = require("peer");
const app = express();

const server = http.createServer(app);

//** Peer Server */
const customGenerationFunction = () =>
  (Math.random().toString(36) + "0000000000000000000").substr(2, 16);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/",
  generateClientId: customGenerationFunction,
});

app.use("/mypeer", peerServer);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server started on port ${port}`));
