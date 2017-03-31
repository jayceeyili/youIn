import React from 'react';
import MessageInputBox from './MessageInputBox.jsx';
import MessageList from './MessageList.jsx';

const Chatbox = (props) => (
  <div>
    <MessageList messages={ props.messages } />
    <MessageInputBox
    	currentUser={ props.currentUser }
    	currentEvent={ props.currentEvent }
      renderNewMessage={ props.renderNewMessage }
      socket= { props.socket }
    />
  </div>
);

export default Chatbox;
