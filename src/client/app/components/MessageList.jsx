import React from 'react';
import MessageListEntry from './MessageListEntry.jsx';

const MessageList = props => (
  <div>
    {
      props.messages.map( message => (
        <MessageListEntry message={ message } />
      ))
    }
  </div>
);

export default MessageList;
    // props.messageList.map(message => (
    //   <MessageListEntry messageListEntry={ message } />
    // ))
