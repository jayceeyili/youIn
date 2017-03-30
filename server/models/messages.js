let db = require('../config');

module.exports = {

  getAll: function () {
    return db.query('select * from messages');
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