const morgan = require("morgan");
const { server } = require("../server")
const routes = require('./routes/index');

server.use(express.json());
server.use(morgan);
server.use(routes);


module.exports = {server};