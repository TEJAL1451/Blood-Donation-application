// Firebase configuration
const FIREBASE_DB_URL = "https://react-feedback-board-default-rtdb.firebaseio.com";

export const addFeedback = async (feedback: Omit<import('../types').Feedback, 'id'>) => {
  try {
    const response = await fetch(`${FIREBASE_DB_URL}/feedback.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedback),
    });

    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }

    const data = await response.json();
    return { id: data.name, ...feedback };
  } catch (error) {
    console.error('Error adding feedback:', error);
    throw error;
  }
};

export const getFeedback = async () => {
  try {
    const response = await fetch(`${FIREBASE_DB_URL}/feedback.json`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch feedback');
    }

    const data = await response.json();
    
    if (!data) return [];
    
    return Object.entries(data).map(([id, feedback]) => ({
      id,
      ...(feedback as Omit<import('../types').Feedback, 'id'>),
    }));
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
};

export const deleteFeedback = async (id: string) => {
  try {
    const response = await fetch(`${FIREBASE_DB_URL}/feedback/${id}.json`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete feedback');
    }

    return id;
  } catch (error) {
    console.error('Error deleting feedback:', error);
    throw error;
  }
};