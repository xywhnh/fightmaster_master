const config = require('./config.js');
const socket_service = require("./service/socket_service");
socket_service.start(config);