import React from 'react';
import MyEvents from './MyEvents.jsx';
import FriendEvents from './FriendEvents.jsx';

const Sidebar = (props) => (
  <div>
    <MyEvents myEvents={ props.myEvents }
              handleSidebarEventClick={ props.handleSidebarEventClick }/>
    <FriendEvents friendEvents={ props.friendEvents }
                  handleSidebarEventClick={ props.handleSidebarEventClick }/>
  </div>
);

export default Sidebar; 

