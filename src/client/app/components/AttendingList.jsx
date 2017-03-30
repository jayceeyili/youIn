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
          <button onClick={ props.handleDeclineEvent }>
            Quit
          </button>
          <div>Is going</div>
        </div>
      }
      {
        !props.isGoing &&
        <div>
          <button className="ui button" onClick={ props.handleDeclineEvent }>
            Decline
          </button>
          <button className="ui primary button" onClick={ props.handleAcceptEvent }>
            Accept
          </button>
        </div>
      }
    </div>
  );
};

export default AttendingList;
