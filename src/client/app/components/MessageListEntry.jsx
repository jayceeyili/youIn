import React from 'react';
import Moment from 'react-moment';

const MessageListEntry = (props) => (
  <div className="item">
    <div className="content">
      <a className="header">{ props.message.user_name }</a>
      <div className="meta">
        <span className="price">{ <Moment fromNow ago>{ props.message.created }</Moment> } ago</span>
      </div>
      <div className="description">
        { props.message.text }
      </div>
    </div>
  </div>
);

export default MessageListEntry;
