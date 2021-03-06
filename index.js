require("dotenv").config();
const app = require("./api/server");
const http = require("http");
const sockeIo = require("socket.io");

const server = http.createServer(app);
const io = sockeIo(server);

const PORT = process.env.PORT || 4100;

io.on("connection", (socket) => {
  console.log("a new user just connected");

  socket.on("order", (order) => {
    io.emit("send-order", [order]);
  });

  socket.on("order-status", (order) => {
    socket.broadcast.emit("send-status", order);
  });

  socket.on("disconnect", () => {
    console.log("user was disconnected");
  });
});

server.listen(PORT, () => console.log(`server running in port ${PORT}`));
