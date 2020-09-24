require("dotenv").config();
const app = require("./api/server");
const http = require("http");
const sockeIo = require("socket.io");

const server = http.createServer(app);
const io = sockeIo(server);

const PORT = process.env.PORT || 4200;

io.on("connection", (socket) => {
  console.log("a new user just connected");

  socket.on("createMessage", (message) => {
    io.emit("newMessage", {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime(),
    });
  });

  socket.on("order", (order) => {
    io.emit("send-order", order);
  });

  socket.on("order-status", (order) => {
    console.log("what is the order ", order);
    io.emit("send-status", order);
  });

  socket.on("disconnect", () => {
    console.log("user was disconnected");
  });
});

server.listen(PORT, () => console.log(`server running in port ${PORT}`));
