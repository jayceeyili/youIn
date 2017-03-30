import React from 'react';
import MessageListEntry from './MessageListEntry.jsx';

const MessageList = props => (
  <div className="ui comments">
    {
      props.messages.map( ( message, index ) => (
        <MessageListEntry
          key={ index }
          message={ message }
        />
      ))
    }
  </div>
);

export default MessageList;
    // props.messageList.map(message => (
    //   <MessageListEntry messageListEntry={ message } />
    // ))
