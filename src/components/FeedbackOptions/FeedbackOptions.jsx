import { func } from 'prop-types';
import React, { Component } from 'react';
import Styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static propTypes = {
    forGood: func.isRequired,
    forNeutral: func,
    forBad: func,
  };

  render() {
    const { forGood, forNeutral, forBad } = this.props;

    return (
      <div className={Styles.position}>
        <button className={Styles.btn} onClick={forGood}>
          Good
        </button>
        <button className={Styles.btn} onClick={forNeutral}>
          Neutral
        </button>
        <button className={Styles.btn} onClick={forBad}>
          Bad
        </button>
      </div>
    );
  }
}
