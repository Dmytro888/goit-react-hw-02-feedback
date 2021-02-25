import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <span>{message}</span>
    </div>
  );
};

Notification.prototype = { message: PropTypes.string.isRequired };

export default Notification;
