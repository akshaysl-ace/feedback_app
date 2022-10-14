import { useContext } from 'react';
import FeedbackContext from '../context/feedbackContext';

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  let average =
    feedbacks.reduce((val, cur) => {
      return val + cur.rating;
    }, 0) / feedbacks.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>Reviews: {feedbacks.length}</h4>
      <h4>Average rating : {isNaN(average) ? '0' : average}</h4>
    </div>
  );
}

export default FeedbackStats;
