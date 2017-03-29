import React from 'react';

const Event = (props) => (
  <li onClick={ () => props.handleSidebarEventClick(props.event) }>
    { props.event.title }
  </li>
);

export default Event; 