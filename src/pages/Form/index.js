import React from 'react';

import { Container, FormBox, InputBlock } from './styles';

export default function Form() {
  return (
    <Container>
      <FormBox>
        <h1>Relatório Semestral de Aluno Regular</h1>
        <p>
          Ao enviar este relatório, o aluno declara serem verdadeiras todas as informações nele relatadas, incluindo aquelas relativas aos artigos atualmente submetidos (ainda em avaliação) ou aceitos para publicação, mas ainda não publicados. Em caso de solicitação por parte da CCP-PPgSI declaro ter todos os documentos necessários para comprovação das informações apresentadas.<br /><br />

          Algumas intruções de como cadastrar o mestrado doutorado no CV Lattes estão nesse <a href="http://ppgsi.each.usp.br/arquivos/PPgSI-cadastro-do-mestrado-em-andamento-no-CV-Lattes.pdf">link.</a> E os procedimentos, instruções e critérios de avaliação do relatório estão disponíveis neste <a href="http://ppgsi.each.usp.br/relatorio-semestral-instrucoesnovo">link.</a><br /><br />

          A coordenação do PPgSI utiliza critérios de avaliação objetivos para avaliar o desempenho dos alunos em cada semestre, mas entende que existem situações excepcionais que exigem uma análise diferenciada e por isso é importante que tanto alunos quanto o orientadores façam um relato detalhado sobre o andamento do projeto para que a CCP consiga entender as circunstâncias de execução do trabalho. Espera-se, por exemplo, que os alunos relatem o impacto da pandemia do covid-19 na execução de seus projetos.<br />
        </p>

        <fieldset>
          <InputBlock>
            <label for="name">Email</label>
            <input name="name" id="name" />
          </InputBlock>
        </fieldset>

        <fieldset>
          <legend>Dados gerais</legend>
          <InputBlock>
            <label for="name">Nome do Aluno</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome do Orientador</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="subject">Qual foi o resultado da avaliação do seu último relatório?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">Aprovado</option>
              <option value="">Aprovado com ressalvas</option>
              <option value="">Insatisfatório</option>
              <option value="">Não se aplica (é o meu primeiro relatório)</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="name">Nome Completo</label>
            <input name="name" id="name" />
          </InputBlock>
          <InputBlock>
            <label for="bio">Comentários finais do ORIENTANDO sobre seu desempenho no último semestre, considerando o relatório reapresentado: </label>
            <textarea name="bio" id="bio"></textarea>
          </InputBlock>
        </fieldset>

        <button type="submit" form="create-class">ENVIAR</button>
      </FormBox>
    </Container>
  );
}