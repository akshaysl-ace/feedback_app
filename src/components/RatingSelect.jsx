import { useContext, useState, useEffect } from 'react';
import FeedbackContext from '../context/feedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(0);

  const { feedEdit } = useContext(FeedbackContext);

  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  useEffect(() => {
    setSelected(feedEdit.item.rating);
  }, [feedEdit]);

  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          name='rating'
          id='num1'
          checked={selected === 1}
          onChange={handleChange}
          value='1'
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num2'
          checked={selected === 2}
          onChange={handleChange}
          value='2'
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num3'
          checked={selected === 3}
          onChange={handleChange}
          value='3'
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num4'
          checked={selected === 4}
          onChange={handleChange}
          value='4'
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num5'
          checked={selected === 5}
          onChange={handleChange}
          value='5'
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num6'
          checked={selected === 6}
          onChange={handleChange}
          value='6'
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num7'
          checked={selected === 7}
          onChange={handleChange}
          value='7'
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num8'
          checked={selected === 8}
          onChange={handleChange}
          value='8'
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num9'
          checked={selected === 9}
          onChange={handleChange}
          value='9'
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num10'
          checked={selected === 10}
          onChange={handleChange}
          value='10'
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
