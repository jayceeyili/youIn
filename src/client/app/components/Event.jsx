import React from 'react';
import {render} from 'react-dom';

const Event = (props) => (
  <li>
    {props.event.title}
  </li>
);

export default Event; 