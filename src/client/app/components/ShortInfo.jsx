import React from 'react';

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
      <div onClick={ this.handleEventInfoClick }>
        <span>{ this.props.event.title } | </span>
        <span>{ this.props.event.location } | </span>
        <span>{ this.props.event.time } | </span>
        { this.state.showDescription ? <div>{ this.props.event.description }</div> : null }
      </div>
    );
  }
};
