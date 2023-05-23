// import PropTypes from 'prop-types';
import styles from './stats.module.css';

export const Stats = ({ number }) => {
  return (
    <div className={styles.component}>
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
      </div>
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>
            <span>Good</span>
            <span>{number}</span>
          </li>
          <li>
            <span>Neutral</span>
            <span>2323</span>
          </li>
          <li>
            <span>Bad</span>
            <span>12312</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
