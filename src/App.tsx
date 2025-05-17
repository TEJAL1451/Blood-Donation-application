import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { MessageSquare } from 'lucide-react';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeToggle />
        
        <header className="app-header">
          <h1 className="app-title">Feedback Board</h1>
          <p className="app-subtitle">
            Share your thoughts and see what others are saying. Your feedback helps us improve!
          </p>
        </header>
        
        <main className="app-main">
          <div className="feedback-grid">
            <FeedbackForm />
            <FeedbackList />
          </div>
        </main>
        
        <footer className="app-footer">
          <div className="footer-content">
            <p>
              <MessageSquare size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
              Feedback Board &copy; {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;