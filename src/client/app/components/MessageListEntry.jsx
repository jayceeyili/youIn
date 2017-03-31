import React from 'react';
import Moment from 'react-moment';

const MessageListEntry = (props) => (
  <div className="content">
    <div className="author">
      { props.message.user_id }
    </div>
    <div className="text">
      { props.message.text }
    </div>
    <div className="date">
      { <Moment fromNow ago>{ props.message.created }</Moment> } ago
    </div>
  </div>
);

export default MessageListEntry;
// on load grab messages from endpoint
// get request to /messages
