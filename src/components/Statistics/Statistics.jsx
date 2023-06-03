import { number } from 'prop-types';
import React, { Component } from 'react';
import Styles from './Statistics.module.css';

export class Statistics extends Component {
  static defaultProps = {
    total: 0,
  };

  static propTypes = {
    goodNum: number,
    neutralNum: number,
    badNum: number,
  };

  render() {
    const { goodNum, neutralNum, badNum, total, positivePercentage } =
      this.props;

    const list = () => {
      if (total === 0) {
        return Styles.hidden;
      } else {
        return Styles.visible;
      }
    };

    return (
      <ul className={list()}>
        <li>Good: {goodNum}</li>
        <li>Neutral: {neutralNum}</li>
        <li>Bad: {badNum}</li>
        <li>Total: {total}</li>
        <li>Positive percentage: {positivePercentage}%</li>
      </ul>
    );
  }
}
