

let db = require('../config');

module.exports = {

  get: function () {
    return db.query('select * from messages');
  },

  write: function (message) {
    /*
      message objects received in the form of
      {
        user_id: int
        event_id: int
        text: string
        created: object/timestamp
        token: string
      }
    */

    /*
      database messages in the form of
      {
        user_id: int
        event_id: int
        text: string
        created: object/timestamp
        message_id: int
      }
    */

    return db.one('insert into messages (user_id, event_id, text)\
     values (${user_id}, ${event_id}, ${text}) returning *', message);
  },

}