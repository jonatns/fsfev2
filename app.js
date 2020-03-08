const http = require("http");
const express = require("express");
const { Server: WebSocketServer } = require("ws");

const app = express();
const port = 3000;

const wss = new WebSocketServer({ port: 40510 });

wss.on("connection", function(ws) {
  ws.on("message", function(message) {
    ws.send(message);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/chat.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
