import React from 'react';
import ShortInfo from './ShortInfo.jsx';
import AttendingList from './AttendingList.jsx';

const EventShow = props => {
  // functions here

  return (
    <div className='eventInfo-container'>
      <ShortInfo event={ props.event }/>
      <AttendingList users={ props.users }/>
    </div>
  );
};

export default EventShow;
