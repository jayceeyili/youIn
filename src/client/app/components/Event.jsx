import React from 'react';

const Event = (props) => (
  <a className={props.currentEvent.event_id === props.event.event_id ? 'item active' : 'item'}
  	onClick={ () => props.handleSidebarEventClick(props.event) }>
    { props.event.title }
  </a>
);

export default Event; 