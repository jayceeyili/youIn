import React from 'react';

const AttendingList = props => {
  // functions

  return (
    <div>
      {
        props.friendsArr.map( ( friend ) => (
          <FriendPic pic=friend.picUrl />
        ))
      }

      <button>Decline</button>
      <button>Accept</button>
    </div>
  );
};

export default AttendingList;
