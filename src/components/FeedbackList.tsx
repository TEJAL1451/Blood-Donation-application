import React, { useState, useEffect } from 'react';
import { Feedback } from '../types';
import FeedbackItem from './FeedbackItem';
import { getFeedback, deleteFeedback } from '../config/firebase';
import { MessageSquare } from 'lucide-react';
import '../styles/FeedbackList.css';

const FeedbackList: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadFeedback = async () => {
    try {
      setLoading(true);
      const data = await getFeedback();
      // Sort by most recent first
      const sortedData = data.sort((a, b) => b.createdAt - a.createdAt);
      setFeedbackList(sortedData);
      setError('');
    } catch (err) {
      setError('Failed to load feedback. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteFeedback(id);
      setFeedbackList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (err) {
      setError('Failed to delete feedback. Please try again.');
      console.error(err);
    }
  };

  if (loading) {
    return <div className="feedback-loading">Loading feedback...</div>;
  }

  if (error) {
    return <div className="feedback-error">{error}</div>;
  }

  return (
    <div className="feedback-list-container">
      <h2>Recent Feedback</h2>
      
      {feedbackList.length === 0 ? (
        <div className="no-feedback">
          <MessageSquare size={48} />
          <p>No feedback yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div className="feedback-list">
          {feedbackList.map((feedback) => (
            <FeedbackItem 
              key={feedback.id} 
              feedback={feedback} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackList;