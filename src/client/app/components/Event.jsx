import React from 'react';
import {render} from 'react-dom';

const Event = (props) => (
  <li>
    <h1>EVENT</h1>
    {props.event.title}
  </li>
);

export default Event; 