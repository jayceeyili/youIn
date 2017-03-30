let db = require('../config');

module.exports = {

  getAll: function () {
    return db.query('select * from messages');
  },
  getUserEvents: function (userid) {
    return db.query('select event_id from users_events\
     where user_id = $1 or current_status=\'accepted\' or\
      current_status=\'pending\'', [userid]);
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