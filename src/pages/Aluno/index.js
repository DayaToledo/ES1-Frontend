import React from 'react';

import { Container } from './styles';
import Visualization from '../../components/Visualization';
import VisualizationFeedback from '../../components/VisualizationFeedback';

export default function Aluno() {
 

  
  return (
    <Container>
      <Visualization />
      <VisualizationFeedback usertype="orientador"/>
      <VisualizationFeedback usertype="coordenador" />
      
    </Container>
  )
}