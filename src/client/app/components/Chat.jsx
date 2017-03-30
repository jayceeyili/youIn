import React from 'react';
import $ from 'jquery';
import {render} from 'react-dom';
import Sidebar from './Sidebar.jsx';
import EventShow from './EventShow.jsx';
import MessageInputBox from './MessageInputBox.jsx';
import data from './../../../../server/data.js';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: data.users,
      myEvents: data.myEvents,
      friendEvents: data.friendEvents,
      currentEvent: data.myEvents[0],
      currentUser: null,
      isGoing: false
    }

    this.handleSidebarEventClick = this.handleSidebarEventClick.bind(this);
    this.handleDeclineClick = this.handleDeclineClick.bind(this);
    this.handleAccecptClick = this.handleAccecptClick.bind(this);
  }

  handleDeclineClick() {
    console.log('Declined!');
    this.setState({
      isGoing: false,
    })
  }

  handleAccecptClick() {
    console.log('Accepted!');
    this.setState({
      isGoing: true,
      // friends: friends.push(currentUser);
    })
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
        <EventShow
          friends={ this.state.friends }
          event={ this.state.currentEvent }
          isGoing={ this.state.isGoing }
          handleDeclineClick={ this.handleDeclineClick }
          handleAccecptClick={ this.handleAccecptClick }
        />
        <MessageInputBox />
      </div>
    );
  }
}
