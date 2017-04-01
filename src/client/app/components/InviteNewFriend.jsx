import React from 'react';
import NewFriendEntry from './NewFriendEntry.jsx';

class InviteNewFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriends: [],
      friendName: '',
      email: ''
    };

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.inviteNewFriend = this.inviteNewFriend.bind(this);
  }

  clearInput() {
    this.setState({
      friendName: '',
      email: ''
    })
  }

  updateName(event) {
    this.setState({
      friendName: event.target.value
    })
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  inviteNewFriend(e) {
    e.preventDefault();
    let n = this.state.friendName.split(' ');
    let firstname = n[0];
    let lastname = n[1] || '';
    let email = this.state.email;
    let friend = {
      user_id: 1111,
      token: 1234,
      firstname: firstname,
      lastname: lastname,
      photoUrl: firstname + 'url',
      email: email
    };

    this.setState({
      newFriends: this.state.newFriends.concat(friend)
    })

    this.clearInput();
  }

  render() {
    return (
      <div className="col-md-12">
        <label>Friend Name</label>
        <input
          value={ this.state.friendName }
          type="text"
          onChange={ this.updateName }
        />
        <label>Friend Email</label>
          <input
            value={ this.state.email}
            type="text"
            onChange={ this.updateEmail }
          />
        <button
          type="button"
          onClick={ this.inviteNewFriend }>Invite Friend</button>

        {
          this.state.newFriends.map( (friend, i) => (
            <NewFriendEntry
              key={ i }
              friend={ friend }
            />
          ))
        }
      </div>
    );
  }
};

export default InviteNewFriend;
        // onClick={ (e) => { this.inviteNewFriend } }>Invite Friend</button>
