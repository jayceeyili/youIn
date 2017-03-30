import React from 'react';
import Avatar from './Avatar.jsx';

const AttendingList = props => {
  // functions

  return (
    <div>
      {
        props.friends.map( ( friend ) => (
          <Avatar pic={ friend.photoUrl }/>
        ))
      }
      {
        props.isGoing &&
        <div>
          <button onClick={ props.handleDeclineEvent }>
            Quit
          </button>
          <div>Is going</div>
        </div>
      }
      {
        !props.isGoing &&
        <div>
          <button onClick={ props.handleDeclineEvent }>
            Decline
          </button>
          <button onClick={ props.handleAcceptEvent }>
            Accept
          </button>
        </div>
      }
    </div>
  );
};

export default AttendingList;
