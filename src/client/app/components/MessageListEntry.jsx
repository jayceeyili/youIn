import React from 'react';

const MessageListEntry = (props) => (
  <div className="content">
    <div className="author">
      { props.message.user_id }
    </div>
    <div className="text">
      { props.message.text }
    </div>
    <div className="date">
      { props.message.created}
    </div>
  </div>
);

export default MessageListEntry;
// on load grab messages from endpoint
// get request to /messages
