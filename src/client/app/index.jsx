import React from 'react';
import {render} from 'react-dom';
import OwnerEventList from './OwnerEventList.jsx';
import FriendEventList from './FriendEventList.jsx';
import CreateEventButton from './CreateEventButton.jsx';
import Homepage from './Homepage.jsx';
import {users as friends} from '../../../server/data.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Facebook from './Facebook.jsx';
import $ from 'jquery';
import Chat from './components/Chat.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      friends: [],
      facebookToken: '',
      userName: '',
      ownerEvents: [],
      friendEvents: [],
      user: ''
    }

    this.getUsers = this.getUsers.bind(this);
    this.getFriends = this.getFriends.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  componentDidMount() {
    let context = this;

    context.getUsers();
  }
  setToken(token) {
    this.setState({
      facebookToken: token
    });
  }
  setName(name) {
    this.setState({
      userName: name
    });
  }

  setCurrentUser(user) {
    this.setState({
      user: user
    });
  }

  getUsers() {
    let context = this;
    $.ajax({
      url: '/users',
      method: 'GET',
      contentType: 'application/json',
      success: function(data) {
        // console.log('result of get on /users', data);
        context.setState({users: data});
      },
      error: function(err) {
        console.log('error in ajax get request in CreateEventButton', err);
      }
    })
  }

  getFriends(user_id) {
    let context = this;
    $.ajax({
      url: '/users/friends',
      method: 'POST',
      // dataTape: 'json',
      // data: JSON.stringify( { user_id: this.state.user } ),
      data: { user_id: user_id },
      success: function(data) {
        console.log('result of POST on /users/friends', data);
        context.setState({friends: data});
      },
      error: function(err) {
        console.log('error in ajax getFriends', err);
      }
    })
  }

  getEvents(history, callback) {
    let context = this;
    $.ajax({
      url: '/events',
      method: 'GET',
      contentType: 'application/json',
      success: callback.bind(this),
      error: function(err) {
        if (err.status >= 400) {
          history.push('/');
        }
      }.bind(this),
    });
  }

  render () {
    return (
      <Router>
      <div>
        <Route exact path='/' component={(props) => {
          return (<Facebook history={props.history}
            setToken={this.setToken.bind(this)}
            setName={this.setName.bind(this)}
            getEvents={this.getEvents.bind(this)}
            getFriends={ this.getFriends }
            setCurrentUser={ this.setCurrentUser } />
          )
        }} />
        <Route path='/homepage' component={(props) => {
          return ( <Homepage ownerEvents={this.state.ownerEvents}
            friendEvents={this.state.friendEvents} friends={this.state.friends}
            accessToken={this.state.facebookToken} userName={this.state.userName}
            history={props.history}
            getEvents={this.getEvents.bind(this)}/>)
        }} />
        <Route path='/chat' component={(props) => {
          return (
            <Chat
              history={ props.history }
              getEvents={ this.getEvents.bind(this)}
              allState={ this.state }
              currentUser={ this.state.user }
            />
          )
        }} />
      </div>
      </Router>
    )
  }

}

render(<App/>, document.getElementById('app'));
