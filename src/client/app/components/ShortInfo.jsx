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
      <div className="ui segment" onClick={ this.handleEventInfoClick }>
        <h1>{ this.props.event.title }</h1>
        <h2>{ this.props.event.location }</h2>
        <h2>{ this.props.event.time }</h2>
        { this.state.showDescription ? <div>{ this.props.event.description }</div> : null }
      </div>
    );
  }
};
