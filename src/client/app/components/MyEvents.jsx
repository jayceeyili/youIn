import React from 'react';
import {render} from 'react-dom';
import Event from './Event.jsx';

const MyEvents = (props) => (
  <div>
    <h1>My Events</h1>
      <ul>
        {
          props.myEvents.map((event) => (
            <Event 
              event={event} /> 
        ))
        }
      </ul>
  </div>
);

export default MyEvents; 
