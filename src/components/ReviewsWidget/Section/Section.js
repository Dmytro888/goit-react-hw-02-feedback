import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
