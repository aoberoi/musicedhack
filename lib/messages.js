/*
 * Dependencies
 */
var io = require('socket.io');



/*
 * External Interface
 */
module.exports = function(httpServer) {
  io.listen(httpServer);
};
