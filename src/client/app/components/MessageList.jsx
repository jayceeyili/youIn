import React from 'react';
import MessageListEntry from './MessageListEntry.jsx';

const MessageList = props => (
  <div className="" style={{overflowX: 'hidden', overflowY: 'scroll', marginBottom: '20px', height: '200px', width: '100%'}}>
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
