const express = require("express");
const path = require("path");
const app = express();

const WebSocketServer = require("ws").Server;
const server = require("http").createServer(app);
const wss = new WebSocketServer({ server });
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

wss.on("connection", function(ws) {
  ws.on("message", function(message) {
    ws.send(message);
  });
});

server.listen(port, () => console.log(`App listening on port ${port}!`));
