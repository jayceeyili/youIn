import React from 'react';
import Event from './Event.jsx';

const MyEvents = (props) => (
  <div>
    <h1>My Events</h1>
      <ul>
        {
          props.myEvents.map((event) => (
            <Event 
              event={ event }
              handleSidebarEventClick={ props.handleSidebarEventClick } /> 
        ))
        }
      </ul>
  </div>
);

export default MyEvents; 
