import { number } from 'prop-types';
import React, { Component } from 'react';

export class Statistics extends Component {
  static propTypes = {
    goodNum: number,
    neutralNum: number,
    badNum: number,
  };

  render() {
    const { goodNum, neutralNum, badNum, total, positivePercentage } =
      this.props;
    return (
      <ul>
        <li>Good: {goodNum}</li>
        <li>Neutral: {neutralNum}</li>
        <li>Bad: {badNum}</li>
        <li>Total: {total}</li>
        <li>Positive percentage: {positivePercentage}%</li>
      </ul>
    );
  }
}
