import React from 'react';
import Event from './Event.jsx';

const MyEvents = (props) => (
  <div>
    <h1>My Events</h1>
      <ul>
        {
          props.myEvents.map( ( event, index ) => (
            <Event
              key={ index }
              event={ event }
              handleSidebarEventClick={ props.handleSidebarEventClick } />
          ))
        }
      </ul>
  </div>
);

export default MyEvents;
