import React, { Component } from 'react';
import Styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { forGood, forNeutral, forBad } = this.props;

    return (
      <div className={Styles.position}>
        <button className={Styles.btnGreen} onClick={forGood}>
          Good
        </button>
        <button className={Styles.btnBlue} onClick={forNeutral}>
          Neutral
        </button>
        <button className={Styles.btnRed} onClick={forBad}>
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  forGood: PropTypes.func.isRequired,
  forNeutral: PropTypes.func,
  forBad: PropTypes.func,
};
