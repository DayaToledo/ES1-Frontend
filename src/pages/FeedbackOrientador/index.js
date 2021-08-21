import React from 'react';

import { Container } from './styles';
import { useFeedback } from '../../context/feedbackContext';
import FeedbackForm from '../../components/Feedback';
import Visualization from '../../components/Visualization';

export default function FeedbackOrientador() {
  const { defineOrientador } = useFeedback();

  defineOrientador();
  return (
    <Container>
      <Visualization />
      <FeedbackForm />
    </Container>
  )
}