import React from 'react';
import Avatar from './Avatar.jsx';

const AttendingList = props => {
  return (
    <div>
      <strong>Attending: </strong>
      <div className="ui relaxed mini horizontal list">
        {
          props.currentAttendees.map( ( friend, index ) => (
            <Avatar
              key={ index }
              user={ friend }
            />
          ))
        }
      </div>
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
