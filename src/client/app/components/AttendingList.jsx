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

      <button onClick={ () => props.handleDeclineClick() }>
        Decline
      </button>
      <button onClick={ () => props.handleAccecptClick() }>
        { props.isGoing ? 'Going' : 'Accept' }
      </button>
    </div>
  );
};

export default AttendingList;
