import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedEdit, setFeedEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`/feedbacks?_sort=id&_order=desc`);
        const data = await response.json();
        setLoading(false);
        setFeedbacks(data);
    }

    const addFeedback = async newFeed => {

        const response = await fetch("/feedbacks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeed)
        });

        const data = await response.json();
        setFeedbacks([...feedbacks, data]);
    }

    const editFeedbackData = item => {
        setFeedEdit({ item, edit: true });
    }

    const updateFeedback = async (id, updatedItem) => {

        const res = await fetch(`/feedbacks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem)
        });
        const data = await res.json();

        setFeedbacks(feedbacks.map((item) => item.id === id ? { id, ...data } : item));
        setFeedEdit({ item: {}, edit: false });
    }

    const deleteFeedBack = async id => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            await fetch(`/feedbacks/${id}`, {
                method: 'DELETE',
            })
            setFeedbacks(feedbacks.filter(item => item.id !== id));
        }
    };

    return <FeedbackContext.Provider value={{
        feedbacks,
        feedEdit,
        loading,
        addFeedback,
        editFeedbackData,
        updateFeedback,
        deleteFeedBack
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;