import React from 'react';
import DeleteButton from './DeleteButton.jsx';
import AttendingList from './AttendingList.jsx';

export default class ShortInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false
    };

    this.handleEventInfoClick = this.handleEventInfoClick.bind(this)
  }

  handleEventInfoClick() {
    this.setState({
      showDescription: !this.state.showDescription
    })
  }

  render() {
    return (
      <div className="ui vertical segment" onClick={ this.handleEventInfoClick }>
        <DeleteButton
          event={ this.props.event }
          accessToken={ this.props.accessToken }
        />
        <div className="ui medium header">{ this.props.event.title }</div>

        <h2>{ this.props.event.location }</h2>
        <h2>{ this.props.event.time }</h2>
        { 
          this.state.showDescription ? <div>{ this.props.event.description }</div> : null 
        }
        <AttendingList
          friends={ this.props.friends }
          isGoing={ this.props.isGoing }
          handleDeclineEvent={ this.props.handleDeclineEvent }
          handleAcceptEvent={ this.props.handleAcceptEvent }
          buttonAccept={ this.props.buttonAccept }
          buttonDecline={ this.props.buttonDecline }
        />
      </div>
    );
  }
};
