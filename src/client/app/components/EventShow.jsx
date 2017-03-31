import React from 'react';
import ShortInfo from './ShortInfo.jsx';
import AttendingList from './AttendingList.jsx';
import MessageInputBox from './MessageInputBox.jsx';
import Chatbox from './Chatbox.jsx';
import CreateEventButton from '../CreateEventButton.jsx';
import DeleteButton from './DeleteButton.jsx';

const EventShow = (props) => (
  <div className='event-show'>
    <CreateEventButton
      friends={ props.friends }
      getEvents={ props.getEvents }
      history={ props.history }
    />
    <ShortInfo
      event={ props.event }
    />
    <AttendingList
      friends={ props.friends }
      isGoing={ props.isGoing }
      handleDeclineEvent={ props.handleDeclineEvent }
      handleAcceptEvent={ props.handleAcceptEvent }
      buttonAccept={ props.buttonAccept }
      buttonDecline={ props.buttonDecline }
    />
    <DeleteButton
      event={ props.event }
      accessToken={ props.accessToken }
    />
    <Chatbox
      currentUser={ props.currentUser }
      messages={ props.messages }
      renderNewMessage={ props.renderNewMessage }
      currentEvent={ props.currentEvent }
      socket={ props.socket }
    />
  </div>
);

export default EventShow;
