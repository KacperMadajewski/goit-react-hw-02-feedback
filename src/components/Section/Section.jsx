import { array, string } from 'prop-types';
import React, { Component } from 'react';

export default class Section extends Component {
  static propTypes = {
    title: string.isRequired,
    children: array,
  };

  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}
