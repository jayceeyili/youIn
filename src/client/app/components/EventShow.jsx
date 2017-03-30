import React from 'react';
import ShortInfo from './ShortInfo.jsx';
import AttendingList from './AttendingList.jsx';
import MessageInputBox from './MessageInputBox.jsx';
import Chatbox from './Chatbox.jsx';
import CreateEventButton from '../CreateEventButton.jsx';

const EventShow = props => {
  // functions here

  return (
    <div className='event-show'>
      <CreateEventButton />
      <ShortInfo event={ props.event }/>
      <AttendingList
        friends={ props.friends }
        isGoing={ props.isGoing }
        handleDeclineEvent={ props.handleDeclineEvent }
        handleAcceptEvent={ props.handleAcceptEvent }
      />
      <Chatbox
        messages={ props.messages }
      />
    </div>
  );
};

export default EventShow;
