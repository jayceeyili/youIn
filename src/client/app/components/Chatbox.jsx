import React from 'react';
import MessageInputBox from './MessageInputBox.jsx';
import MessageList from './MessageList.jsx';

const Chatbox = (props) => (
  <div>
    <MessageList messages={ props.messages } />
    <MessageInputBox
      renderNewMessage={ props.renderNewMessage }
    />
  </div>
);

export default Chatbox;
