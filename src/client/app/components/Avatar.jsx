import React from 'react';

const Avatar = props => (
	<div className="item">
    <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" />
    <div className="content">
      <a className="header">{ `${props.user.firstname} ${props.user.lastname}` }</a>
    </div>
  </div>
);

export default Avatar;
