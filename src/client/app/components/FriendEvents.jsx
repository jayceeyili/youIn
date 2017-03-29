import React from 'react';
import {render} from 'react-dom';
import Event from './Event.jsx';

const FriendEvents = (props) = (
  <div>
    <h1>Friend's Events</h1>
      <ul>
        {this.props.friendEvents.maps((event) => {
          <Event event={event} /> 
        })}
      </ul>
  </div>
);

export defaults FriendEvents;