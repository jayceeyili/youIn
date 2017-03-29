import React from 'react';
import {render} from 'react-dom';
import Sidebar from ''
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
    )
  }
}

render(<Chat/>, document.getElementById('app'));