require("dotenv").config();
const server = require("./api/server");

const PORT = process.env.PORT || 4200;

server.listen(PORT, () => console.log(`server running in port ${PORT}`));
