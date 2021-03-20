import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    const items = Object.keys(options);

    return (
      <div>
        {items.map(item => (
          <button className={style.button}
            type="button"
            key={item}
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;