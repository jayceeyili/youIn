import React from 'react';
import Event from './Event.jsx';

const FriendEvents = (props) => (
  <div>
      <div className="ui medium header" style={{padding: '5px 20px'}}>Friend Events</div>
      <ul>
        {
          props.friendEvents.map( ( event, index ) => (
            <Event
              currentEvent={ props.currentEvent }
              key={ index }
              event={ event }
              handleSidebarEventClick={ props.handleSidebarEventClick } />
          ))
        }
      </ul>
  </div>
);

export default FriendEvents;
