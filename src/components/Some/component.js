import React, { Component } from 'react';
import classNames from './styles.scss';

class Some extends Component {
  render() {
    return (
      <div className={classNames.container}>
        Hello!
      </div>
    );
  }
}

export default Some;
