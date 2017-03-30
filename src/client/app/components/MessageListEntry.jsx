import React from 'react';

const MessageListEntry = (props) => (
  <div>
    <div>
      { props.message.user_id }
    </div>
    <div>
      { props.message.text }
    </div>
    <div>
      { props.message.created}
    </div>
  </div>
);

export default MessageListEntry;
// on load grab messages from endpoint
// get request to /messages
