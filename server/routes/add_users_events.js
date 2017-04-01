'use strict';

let db = require('../config');
let io = require('../io').io();
let Events = require('../models/events');

module.exports = function(req, res) {
  let userIds = req.body.userIds;
  let eventId = req.body.eventId;

  db.task(t => {
    return t.batch(
      userIds.map(id => {
        return t.query('INSERT into USERS_EVENTS (event_id, user_id) VALUES ($1, $2)', [eventId, id])
      })
    )
    .then( (result) => {
      Events.getOneEvent(eventId)
        .then(result => {
          io.to('room:new-rooms').emit('new-room', {
            users: userIds,
            event: result[0]
          });
        });
      return t.query('INSERT into USERS_EVENTS (event_id, user_id, current_status) VALUES ($1, $2, $3)', [eventId, req.user.user_id, 'accepted'])
    });

    
  })
  .then((result) => {
     /**
       * IO
       */
    res.status(201).send('updated users_events table') 
  });
};
