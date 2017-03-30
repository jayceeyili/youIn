var sockets = require('socket.io');
var io = null;

module.exports = {
	io: function() {
		return io;
	},

	init: function(server) {
		io = sockets(server);
		
		io.on('connection', function(socket) {
			console.log('connected to sockets: ', socket);
			socket.on('disconnect', function() {
				console.log('client disconnected');
			});
		})

		return io;
	}
}