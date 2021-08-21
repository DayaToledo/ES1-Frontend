import React, { useState } from 'react';
import feedbackApi from '../../services/feedback';

import { Container, FormBox, InputBlock } from './styles';
import { useFeedback } from '../../context/feedbackContext';

export default function Feedback() {
  const { isCoordenador, nameAluno } = useFeedback();

  const [comment, setComment] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [nameCompleto, setNameCompleto] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let response;
    try {
      console.log(isCoordenador);
      if (isCoordenador) {
        response = await feedbackApi.create({
          comment,
          evaluation,
          nameCoordenador: nameCompleto,
          nameAluno,
          email
        });
      } else {
        response = await feedbackApi.create({
          comment,
          evaluation,
          nameOrientador: nameCompleto,
          nameAluno,
          email
        });
      }

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
            <label>Nome Completo </label>
            <input
              name="nameCompleto"
              value={nameCompleto}
              onChange={e => setNameCompleto(e.target.value)}/>    
          </InputBlock>

          <InputBlock>
            <label>Email </label>
            <input
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}/>    
          </InputBlock>


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