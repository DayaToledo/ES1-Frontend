import React, { useState } from 'react';
import feedbackApi from '../../services/feedback';

import { Container, FormBox, InputBlock } from './styles';

export default function Feedback() {
  const [comment, setComment] = useState('');
  const [evaluation, setEvaluation] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await feedbackApi.create({
        comment,
        evaluation
      });

      console.log(response);
      if (response.status === 200)
        console.log("Dados enviados com sucesso!")
    } catch (error) {
      console.log("Erro ao enviar os dados, por favor, tente novamente...");
    }
  }

  return (
    <Container>
      <FormBox onSubmit={handleSubmit}>
        <h1>Feedback</h1>

        <fieldset>
          <legend />

          <InputBlock>
            <label>Indicação do orientador sobre o desempenho no último semestre</label>
            <select
              name="evaluation"
              value={evaluation}
              onChange={e => setEvaluation(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="Adequado (A)">Adequado (A) </option>
              <option value="Adequado com ressalvas (AR)">Adequado com ressalvas (AR) </option>
              <option value="Insatisfatório (I)">Insatisfatório (I)</option>
            </select>
          </InputBlock>

          <InputBlock>
            <label>Comentários sobre o desempenho do orientando no último semestre </label>
            <textarea
              name="comment"
              value={comment}
              onChange={e => setComment(e.target.value)}>
            </textarea>
          </InputBlock>

          <button type="submit">ENVIAR</button>

        </fieldset>
      </FormBox>
    </Container>
  );
}