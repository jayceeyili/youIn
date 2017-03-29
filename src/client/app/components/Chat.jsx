import React from 'react';
import {render} from 'react-dom';
import Sidebar from './Sidebar.jsx';
import EventShow from './EventShow.jsx';
import data from './../../../../server/data.js';
import $ from 'jquery';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: data.users,
      myEvents: data.myEvents,
      friendEvents: data.friendEvents,
      currentEvent: data.myEvents[0]
    }

    this.handleSidebarEventClick = this.handleSidebarEventClick.bind(this);
  }

  handleSidebarEventClick(event) {
    console.log(event);
    this.setState({
      currentEvent: event
    })
  }

  render() {
    return (
      <div>
        <Sidebar myEvents={ this.state.myEvents }
                 friendEvents={ this.state.friendEvents }
                 handleSidebarEventClick={ this.handleSidebarEventClick }/>
        <EventShow users={ this.state.users } event={ this.state.currentEvent }/>
      </div>
    );
  }
}
// render(<Chat/>, document.getElementById('app'));
        // <Chatbox />
