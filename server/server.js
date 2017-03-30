'use strict';
const dotenv = require('dotenv').config();

let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let passport = require('./middleware/initPassport');
let path = require('path');
let handler = require('./routes/request_handler');
let Message = require('./models/messages');

// const db = require('./config.js');
// const importdata = require('./fakeData.js');

let port = process.env.PORT || 8080;
let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session( {
  secret: 'I didn\'t get Inception',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', express.static(path.join(__dirname, '../src/client')));

app.get('/users', handler.getUsers);

app.get('/events', passport.authenticate('facebook-token'), handler.getEvents);

app.post('/events/users', passport.authenticate('facebook-token'), handler.addUsersEvents);

app.post('/events/create', passport.authenticate('facebook-token'), handler.createEvent);

app.get('/messages', function(req, res) {
  Message.getAll()
    .then(function(messages) {
      console.log(messages);
      res.status(200).send(messages);
    })
});

app.post('/messages', function(req, res) {
  console.log(req.body);
  Message.write(req.body)
    .then(function(result) {
      console.log('Add: ', result);
      res.status(200).send(result);
    })
})

app.post('/accept', passport.authenticate('facebook-token'), handler.acceptEvent);

app.post('/reject', passport.authenticate('facebook-token'), handler.rejectEvent);

app.post('/delete', passport.authenticate('facebook-token'), handler.deleteEvent);

app.post('/delete/owner', passport.authenticate('facebook-token'), handler.deleteOwnerEvent);

app.post('/checkStatus', passport.authenticate('facebook-token'), handler.checkStatus);

app.get('/test', passport.authenticate('facebook-token'), function(req, res) {
  if (req.user) {
    res.status(200).json(
      { message: 'success',
        user: req.user
      });
  } else {
    res.status(404).send('login failed');
  }
});

app.get('*', handler.wildCard);


var server = app.listen(port, function() {
  console.log('we are now listening on: ' + port);
});

// SERVER SOCKET STUFF     
// *************************
const io = require('socket.io')(server);

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
io.on('connection', function (socket) {
  console.log('connected to socket');
  socket.on('disconnect', () => console.log('Client disconnected'));

  //needs authentication 

  //client sents a send-message event when they hit enter with a message
  socket.on('send-message', function (data) {
    console.log('received message');
    
    var dbResult = message.write(data);
    var room = data.event_id
    socket.join(`${room}`, function() {
      // new message object retrieved from db.
      dbResult.then(function (result) {
      // sends a response of new-message event to all people in the event room.
        io.to(`${room}`, 'a new message')
        .emit('new-message', result);
      })
      .catch((err) => {
        console.error(err, 'an error in db retrieval');
      });
    });
  });

});

