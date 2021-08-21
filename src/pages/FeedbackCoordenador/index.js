import React from 'react';

import { Container } from './styles';
import { useFeedback } from '../../context/feedbackContext';
import FeedbackForm from '../../components/Feedback';
import Visualization from '../../components/Visualization';
import VisualizationFeedback from '../../components/VisualizationFeedback';

export default function FeedbackCoordenador() {
  const { defineCoordenador } = useFeedback();

  defineCoordenador();
  return (
    <Container>
      <Visualization />
      <VisualizationFeedback />
      <FeedbackForm />
    </Container>
  )
}