import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import styles from './ReviewsWidget.module.css';

class ReviewsWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  reviewAdd = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotalFeedback () {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((100 * good) / (good + bad + neutral));
  };

  render () {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = good + bad + neutral;
    return (
      <div className={styles.widgetCard}>
        <Section title='PLEASE LEAVE FEEDBACK'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.reviewAdd}
          ></FeedbackOptions>
        </Section>
        <Section title='STATISTICS'>
          {(total > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage() || 0}
            />
          )) || <Notification message='No feedback given'></Notification>}
        </Section>
      </div>
    );
  }
}
export default ReviewsWidget;
