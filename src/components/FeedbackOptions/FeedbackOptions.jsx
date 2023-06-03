import { func } from 'prop-types';
import React, { Component } from 'react';
import Styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static propTypes = {
    good: func,
    neutral: func,
    bad: func,
  };

  render() {
    const { good, neutral, bad } = this.props;

    return (
      <div className={Styles.position}>
        <button className={Styles.btn} onClick={good}>
          Good
        </button>
        <button className={Styles.btn} onClick={neutral}>
          Neutral
        </button>
        <button className={Styles.btn} onClick={bad}>
          Bad
        </button>
      </div>
    );
  }
}
