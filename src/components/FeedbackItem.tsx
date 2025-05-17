import React from 'react';
import { Feedback } from '../types';
import { Trash2 } from 'lucide-react';
import '../styles/FeedbackItem.css';

interface FeedbackItemProps {
  feedback: Feedback;
  onDelete: (id: string) => void;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback, onDelete }) => {
  const { id, name, email, comment, createdAt } = feedback;
  
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  return (
    <div className="feedback-item">
      <div className="feedback-header">
        <h3>{name}</h3>
        <button 
          onClick={() => onDelete(id)} 
          className="delete-button"
          aria-label="Delete feedback"
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      <p className="feedback-comment">{comment}</p>
      
      <div className="feedback-footer">
        <span className="feedback-email">{email}</span>
        <span className="feedback-date">{formattedDate}</span>
      </div>
    </div>
  );
};

export default FeedbackItem;