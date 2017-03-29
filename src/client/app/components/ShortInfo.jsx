import React from 'react';

const ShortInfo = props => {
  // functions

  return (
    <div>
      <span>{ props.title }</span>
      <span>{ props.location }</span>
      <span>{ props.time }</span>
    </div>
  );
};

export default ShortInfo;
