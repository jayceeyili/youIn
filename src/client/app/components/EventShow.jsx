import React from 'react';
import ShortInfo from './ShortInfo.jsx';
import AttendingList from './AttendingList.jsx';

const EventShow = props => {
  // functions here

  return (
    <div className='eventInfo-container'>
      <ShortInfo event={ props.event }/>
      <AttendingList
        friends={ props.friends }
        isGoing={ props.isGoing }
        handleDeclineClick={ props.handleDeclineClick }
        handleAccecptClick={ props.handleAccecptClick }
      />
    </div>
  );
};

export default EventShow;
