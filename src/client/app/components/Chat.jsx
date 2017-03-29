import React from 'react';
import {render} from 'react-dom';
import Sidebar from './Sidebar.jsx';
import $ from 'jquery';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myEvents: [],
      friendEvents: []
    }
  }

  render() {
    return (
      <Sidebar myEvents={ this.state.myEvents } friendEvents={ this.state.friendEvents } />
      // we need the CreateEventButton here
      <EventShow /> //TODO: add pass down state
    )
  }
}

render(<Chat/>, document.getElementById('app'));
