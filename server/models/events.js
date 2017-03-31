let db = require('../config');

module.exports = {
	getOneEvent: function(eventId) {
		return db.query('SELECT * FROM events WHERE event_id = $1', [eventId]);
	}
}