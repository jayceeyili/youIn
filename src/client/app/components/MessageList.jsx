import React from 'react';
import ReactDOM from 'react-dom';
import MessageListEntry from './MessageListEntry.jsx';

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const messageList = this.messageList;
    const scrollHeight = messageList.scrollHeight;
    const height = messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  render() {
    return (
      <div className="ui items" style={{position: 'fixed', bottom: '40px', overflowX: 'hidden', overflowY: 'scroll', height: '300px', width: '100%'}}
        ref={input => { this.messageList = input}}>
        {
          this.props.messages.map( ( message, index ) => (
            <MessageListEntry
              key={ index }
              message={ message }
            />
          ))
        }
      </div>
    );
  }
}