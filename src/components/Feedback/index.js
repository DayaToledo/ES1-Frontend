import React from 'react';

import { Container, FormBox, InputBlock } from './styles';

export default function Feedback() {
  return (
    <Container>
      <FormBox>
        <h1>Feedback</h1>

        <fieldset>
          <legend/>

          <InputBlock>
            <label for="subject">Indicação do orientador sobre o desempenho no último semestre</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">Adequado (A) </option>
              <option value="">Adequado com ressalvas (AR) </option>
              <option value="">Insatisfatório (I)</option>
            </select>
          </InputBlock>

          <InputBlock>
            <label for="bio">Comentários sobre o desempenho do orientando no último semestre </label>
            <textarea name="bio" id="bio"></textarea>
          </InputBlock>

          <button type="submit" form="create-class">ENVIAR</button>

        </fieldset>
      </FormBox>
    </Container>
  );
}