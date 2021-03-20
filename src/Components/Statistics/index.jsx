import PropTypes from 'prop-types';

const Statistics = props => {
    return(
        <div className="statistics">
                <h3>Good: {props.good}</h3>
                <h3>Neutral: {props.neutral}</h3>
                <h3>Bad: {props.bad}</h3>
                <h3>Total: {props.total}</h3>
                <h3>Positive feedback: {props.positivePercentage+"%"}</h3>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistics;