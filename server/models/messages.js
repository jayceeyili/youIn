let db = require('../config');

module.exports = {

  getAll: function () {
    return db.query('select * from messages');
  },
  getUserEvents: function (userid) {
    return db.query('select event_id from users_events\
     where user_id = $1 and (current_status=\'accepted\' or\
      current_status=\'pending\')', [userid]);
  },

  getUserEvent: function (obj) {
    return db.query('select event_id from users_events\
     where user_id = $1 and event_id = $2 and (current_status=\'accepted\' or\
      current_status=\'pending\')', [obj.user_id, obj.event_id]);
  },

  write: function (message) {
    /*
      message objects received in the form of
      {
        user_id: int
        event_id: int
        text: string
        created: new Date()
        token: string
      }
    */

    return db.one('insert into messages (event_id, user_id, text, created)\
     values (${event_id}, ${user_id}, ${text}, ${created}) returning *', message);
  },

}