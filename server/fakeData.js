/**
 * Seeds DB with default data.
 */
'use strict';
var db = require('./config');
var users = require('./data').users;
var events = require('./data').events;
var usersEvents = require('./data').usersEvents;
var messages = require('./data').messages;

users.forEach( (user) => {
  db.query('INSERT into users VALUES (${user_id}, ${token}, ${firstname}, ${lastname}, ${photoUrl}, ${email})', user)
 .then((result) => {
   console.log('these are fake users', result);
 })
 .catch((err) => {
   console.log('this is an error with users', err);
 });
});

events.forEach( (event) => {
  db.query('INSERT into EVENTS VALUES (${event_id}, ${owner}, ${title}, ${short_desc}, ${description}, ${location}, ${date}, ${time}, ${min})', event)
  .then((result) => {
    console.log('these are fake events', result);
  })
  .catch((err) => {
    console.log('this is an error with events', err);
  });
});

usersEvents.forEach( (userEvent) => {
  db.query('INSERT into users_events VALUES (${event_id}, ${user_id}, ${current_status})', userEvent)
  .then((result) => {
    console.log('these are fakes user_events', result);
  })
  .catch((err) => {
    console.log('this is an error with the user_events', err);
  });
});

messages.forEach( (message) => {
  db.query('INSERT into messages VALUES (${message_id}, ${user_id}, ${event_id}, ${text}, ${created})', message)
  .then((result) => {
    console.log('Messages added: ', result);
  })
  .catch((err) => {
    console.log('this is an error with the messages', err);
  });
});
