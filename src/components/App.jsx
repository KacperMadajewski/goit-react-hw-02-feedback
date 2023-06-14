import Section from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  counter = () => {
  
}

  counterForGood = () => {
    this.setState((state, props) => {
      return { good: state.good + props.step };
    });
  };

  counterForNeutral = () => {
    this.setState((state, props) => {
      return { neutral: state.neutral + props.step };
    });
  };

  counterForBad = () => {
    this.setState((state, props) => {
      return { bad: state.bad + props.step };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const percentage = (this.state.good / total) * 100;
    const round = percentage.toFixed(2);
    return round;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            forGood={this.counterForGood}
            forNeutral={this.counterForNeutral}
            forBad={this.counterForBad}
          />
          <Statistics
            goodNum={this.state.good}
            neutralNum={this.state.neutral}
            badNum={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          <Notification
            total={this.countTotalFeedback()}
            message={'There is no feedback'}
          />
        </Section>
      </div>
    );
  }
}
