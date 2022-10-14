import Card from './shared/Card';
import Button from './shared/Button';
import { useContext, useEffect, useState } from 'react';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/feedbackContext';

function FeedbackForm() {
  const { addFeedback, feedEdit, updateFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (feedEdit.edit) {
      setBtnDisabled(false);
      setText(feedEdit.item.text);
      setRating(feedEdit.item.rating);
    }
  }, [feedEdit]);

  const handleText = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg('Text must be 10 characters');
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { text, rating };
      if (feedEdit.edit) {
        console.log('in submit', feedEdit);
        updateFeedback(feedEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
      setBtnDisabled(true);
      setRating(0);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate the service ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review..'
            onChange={handleText}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className='message'>{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
