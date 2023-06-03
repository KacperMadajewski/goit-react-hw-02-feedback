import { number, string } from 'prop-types';
import React, { Component } from 'react';
import Styles from './Notifications.module.css';

export class Notification extends Component {
  static propTypes = {
    total: number,
    message: string,
  };

  render() {
    const { total, message } = this.props;

    const visibility = () => {
      if (total === 0) {
        return Styles.visibile;
      } else {
        return Styles.hidden;
      }
    };

    return (
      <div className={visibility()}>
        <h4 className={Styles.message}>{message}</h4>
      </div>
    );
  }
}
