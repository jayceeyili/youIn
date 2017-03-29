import React from 'react';
import {render} from 'react-dom';
import Sidebar from './Sidebar.jsx';
import $ from 'jquery';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myEvents: [{
        event_id: 1,
        owner: 1,
        title: 'I Wanna Go To The Beach',
        'short_desc': 'Beach Party',
        description: 'Let\'s go to Ocean Beach while the sun is out! BYOB and don\'t joke about sharks, I\'ll kick you out for real.',
        location: 'Ocean Beach, SF, right off the N Judah.',
        date: '2017-03-14',
        time: '05:30:00',
        attendees: 10,
        min: 5
      },
      {
        event_id: 2,
        owner: 2,
        title: 'Pig, Beer, and Bocce Ball',
        'short_desc': 'BBQ',
        description: 'Vegan Only; don\'t be a jerk about it.',
        location: '456 Fillmore Street, San Francisco, CA 94117',
        date: '2017-03-14',
        time: '17:45:00',
        attendees: 3,
        min: 15
      }],
      friendEvents: [{
        event_id: 3,
        owner: 5,
        title: 'Moonlight at 8',
        'short_desc': 'Movie',
        description: 'Let\'s go see Moonlight',
        location: 'Downtown AMC Metreon',
        date: '2017-03-14',
        time: '20:00:00',
        attendees: 6,
        min: 5
      }],
      // currentEvent: this.state.myEvents[0]
    }

    this.handleSidebarEventClick = this.handleSidebarEventClick.bind(this);
  }

  handleSidebarEventClick(event) {
    this.setState({
      currentEvent: event
    })
  }

  render() {
    return (
      <Sidebar myEvents={ this.state.myEvents } 
               friendEvents={ this.state.friendEvents } 
               handleSidebarEventClick={ this.handleSidebarEventClick }/>
    )
  }
}

// render(<Chat/>, document.getElementById('app'));