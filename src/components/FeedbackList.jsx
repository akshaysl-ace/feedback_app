import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/feedbackContext';
import Loader from './shared/Loader';

const FeedbackList = () => {
  const { feedbacks, loading } = useContext(FeedbackContext);

  if (!loading && feedbacks.length === 0) {
    return <p>No feedbacks yet</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
