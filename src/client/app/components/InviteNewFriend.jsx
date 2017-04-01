import React from 'react';

class InviteNewFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  inviteNewFriend() {
    // let
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
      </div>
    );
  }
};

export default InviteNewFriend;
