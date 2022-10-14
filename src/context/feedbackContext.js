import { createContext, useState } from "react";
import { v4 as createId } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedEdit, setFeedEdit] = useState({
        item: {},
        edit: false
    });

    const addFeedback = newFeed => {
        newFeed.id = createId();
        setFeedbacks([...feedbacks, newFeed]);
    }

    const editFeedbackData = item => {
        setFeedEdit({ item, edit: true });
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedbacks(feedbacks.map((item) => item.id === id ? { id, ...updatedItem } : item));
        setFeedEdit({ item: {}, edit: false });
    }

    const deleteFeedBack = id => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            setFeedbacks(feedbacks.filter(item => item.id !== id));
        }
    };

    return <FeedbackContext.Provider value={{
        feedbacks,
        feedEdit,
        addFeedback,
        editFeedbackData,
        updateFeedback,
        deleteFeedBack
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;