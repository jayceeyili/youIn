import React from 'react';

const ShortInfo = props => {
  // functions

  return (
    <div>
      <span>{ props.event.title } | </span>
      <span>{ props.event.location } | </span>
      <span>{ props.event.time } | </span>
    </div>
  );
};

export default ShortInfo;
