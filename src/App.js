import React from 'react';

import './styles/GlobalStyles.css';
import Routes from './routes';

import FeedbackProvider from './context/feedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Routes />
    </FeedbackProvider>
  );
}

export default App;
