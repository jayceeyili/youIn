import React from 'react';
import Avatar from './Avatar.jsx';

const AttendingList = props => {
  // functions
  return (
    <div className="ui segment">
      {
        props.friends.map( ( friend, index ) => (
          <Avatar
            key={ index }
            pic={ friend.photoUrl }
          />
        ))
      }
      {
        props.isGoing &&
        <div> 
          <button className={ props.buttonDecline } onClick={ props.handleDeclineEvent }>
            Decline
          </button>
          <button className={ props.buttonAccept }>Going</button>
        </div>
      }
      {
        !props.isGoing &&
        <div>
          <button className={ props.buttonDecline } onClick={ props.handleDeclineEvent }>
            { props.isGoing === '' ? 'Decline' : 'Not Going' }
          </button>
          <button className={ props.buttonAccept } onClick={ props.handleAcceptEvent }>
            Accept
          </button>
        </div>
      }
    </div>
  );
};

export default AttendingList;
