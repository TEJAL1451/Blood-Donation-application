import React, { useState } from 'react';
import { addFeedback } from '../config/firebase';
import '../styles/FeedbackForm.css';

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!feedback.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!feedback.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(feedback.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!feedback.comment.trim()) {
      newErrors.comment = 'Comment is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      await addFeedback({
        ...feedback,
        createdAt: Date.now()
      });
      
      setFeedback({ name: '', email: '', comment: '' });
      setSubmitMessage('Thank you for your feedback!');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    } catch (error) {
      setSubmitMessage('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Share Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            placeholder="Your name"
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            placeholder="Your email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={feedback.comment}
            onChange={handleChange}
            placeholder="Your feedback"
            rows={4}
            className={errors.comment ? 'error' : ''}
          />
          {errors.comment && <span className="error-message">{errors.comment}</span>}
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
        
        {submitMessage && (
          <div className={`submit-message ${submitMessage.includes('Failed') ? 'error' : 'success'}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;