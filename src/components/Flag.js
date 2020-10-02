import React from 'react';

export default class Flag extends React.Component {
  render() {
    return (
        <div className={`flag ${ this.props.type }`}>
            <span>{this.props.message}</span>
        </div>
    );
  }
}
