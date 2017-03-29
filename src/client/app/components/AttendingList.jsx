import React from 'react';
import FriendPic from './FriendPic.jsx';

const AttendingList = props => {
  // functions

  return (
    <div>
      {
        props.users.map( ( friend ) => (
          <FriendPic pic={ friend.photoUrl }/>
        ))
      }

      <button>Decline</button>
      <button>Accept</button>
    </div>
  );
};

export default AttendingList;
