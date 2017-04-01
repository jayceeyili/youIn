import React from 'react';
import ShortInfo from './ShortInfo.jsx';
import AttendingList from './AttendingList.jsx';
import MessageInputBox from './MessageInputBox.jsx';
import Chatbox from './Chatbox.jsx';
import CreateEventButton from '../CreateEventButton.jsx';

const EventShow = (props) => (
  <div className='event-show'>
    <CreateEventButton
      friends={ props.friends }
      getEvents={ props.getEvents }
      history={ props.history }
    />
    <div className="ui horizontal divider">
      Event Chat
    </div>

    <ShortInfo
      accessToken={ props.accessToken }
      event={ props.event }
      friends={ props.friends }
      isGoing={ props.isGoing }
      handleDeclineEvent={ props.handleDeclineEvent }
      handleAcceptEvent={ props.handleAcceptEvent }
      buttonAccept={ props.buttonAccept }
      buttonDecline={ props.buttonDecline }
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
