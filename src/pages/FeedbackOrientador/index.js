import React from 'react';

import { Container } from './styles';
import FeedbackForm from '../../components/Feedback';
import Visualization from '../../components/Visualization';

export default function FeedbackOrientador() {
  return (
    <Container>
      <Visualization />
      <FeedbackForm />
    </Container>
  )
}