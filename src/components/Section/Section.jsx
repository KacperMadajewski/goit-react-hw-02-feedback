import { array, string } from 'prop-types';
import React, { Component } from 'react';
import Styles from './Section.module.css'

export default class Section extends Component {
  static propTypes = {
    title: string.isRequired,
    children: array,
  };

  render() {
    const { title, children } = this.props;

    return (
      <div className={Styles.backGround}>
        <h2 className={Styles.title}>{title}</h2>
        {children}
      </div>
    );
  }
}
