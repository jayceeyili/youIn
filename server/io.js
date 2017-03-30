var sockets = require('socket.io');
var io = null;
var Message = require('./models/messages');

module.exports = {
	io: function() {
		return io;
	},

	init: function(server) {
		io = sockets(server);

		io.on('connection', function(socket) {
			console.log('connected to sockets');

			socket.on('send-message', function(data) {
				console.log('Sockets: received message ', data);
			  var room = data.event_id
			  socket.join(`${room}`, function() {
			    // new message object retrieved from db.
			    Message.write(data)
			    	.then(function (result) {
			    // sends a response of new-message event to all people in the event room.
				      io.to(`${room}`, 'a new message')
				      .emit('new-message', result);
				    })
				    .catch((err) => {
				      console.error(err, 'an error in db retrieval');
				    });
			  });
			});

			socket.on('disconnect', function() {
				console.log('client disconnected');
			});
		})

		return io;
	}
}