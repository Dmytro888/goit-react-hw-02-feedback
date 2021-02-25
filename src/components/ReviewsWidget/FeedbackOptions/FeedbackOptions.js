import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttonBox}>
      {options.map(option => (
        <button
          className={styles.button}
          type='button'
          name={option}
          key={option}
          onClick={onLeaveFeedback}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
