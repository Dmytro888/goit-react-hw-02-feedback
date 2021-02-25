import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statBox}>
    <span>GOOD: {good}</span>
    <span>NEUTRAL: {neutral}</span>
    <span>BAD: {bad}</span>
    <span>TOTAL FEEDBACK: {total}</span>
    <span>POSITIVE FEEDBACK: {positivePercentage}%</span>
  </div>
);

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
