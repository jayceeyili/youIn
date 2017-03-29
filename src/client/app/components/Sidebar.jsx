import React from 'react';
import {render} from 'react-dom';
import MyEvents from './MyEvents.jsx';
import FriendEvents from './FriendEvents.jsx';

const Sidebar = (props) = (
  <div>
    <MyEvents myEvents={ this.props.myEvents }/>
    <FriendEvents friendEvents={ this.props.friendEvents }/>
  </div>
);

export defaults Sidebar; 