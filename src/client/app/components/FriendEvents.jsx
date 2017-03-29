import React from 'react';
import Event from './Event.jsx';

const FriendEvents = (props) => (
  <div>
    <h1>Friend Events</h1>
      <ul>
        {
          props.friendEvents.map(event => (
            <Event
              event={ event } 
              handleSidebarEventClick={ props.handleSidebarEventClick }/>
          ))
        }
      </ul>
  </div>
);

export default FriendEvents;