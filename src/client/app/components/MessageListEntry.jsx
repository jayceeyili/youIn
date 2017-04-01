import React from 'react';
import Moment from 'react-moment';

const MessageListEntry = (props) => {
  let name = props.message.firstname + ' ' + props.message.lastname;
  
  return (
    <div className="item">
      <div className="content">
        <a className="header">{ name }</a>
        <div className="meta">
          <span className="price">{ <Moment fromNow ago>{ props.message.created }</Moment> } ago</span>
        </div>
        <div className="description">
          { props.message.text }
        </div>
      </div>
    </div>
  );
}

export default MessageListEntry;
