import React from 'react';
import {render} from 'react-dom';
import Event from './Event.jsx';

const FriendEvents = (props) => (
  <div>
    <h1>Friend Events</h1>
      <ul>
        {
          props.friendEvents.map(event => (
            <Event
              event={event} />
          ))
        }
      </ul>
  </div>
);

export default FriendEvents;