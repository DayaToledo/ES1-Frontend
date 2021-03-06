import React, { useState } from 'react';
import moment from 'moment';
import formsApi from '../../services/forms';
import { Container, FormBox, InputBlock } from './styles';

export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [numberUsp, setNumberUsp] = useState('');
  const [nameOrientador, setNameOrientador] = useState('');
  const [linkLattes, setLinkLattes] = useState('');
  const [dateLattes, setDateLattes] = useState('');
  const [curso, setCurso] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');
  const [question5, setQuestion5] = useState('');
  const [question6, setQuestion6] = useState('');
  const [question7, setQuestion7] = useState('');
  const [question8, setQuestion8] = useState('');
  const [question9, setQuestion9] = useState('');
  const [question10, setQuestion10] = useState('');
  const [question11, setQuestion11] = useState('');
  const [question12, setQuestion12] = useState('');
  const [question13, setQuestion13] = useState('');
  const [question14, setQuestion14] = useState('');
  const [question15, setQuestion15] = useState('');
  const [question16, setQuestion16] = useState('');
  const [question17, setQuestion17] = useState('');
  const [question18, setQuestion18] = useState('');
  const [question19, setQuestion19] = useState('');
  const [question20, setQuestion20] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const date = moment(dateLattes, "DD/MM/YYYY").format();
      const response = await formsApi.create({
        name, numberUsp, email, nameOrientador, linkLattes, dateLattes: date, curso,
        question1, question2, question3, question4, question5,
        question6, question7, question8, question9, question10,
        question11, question12, question13, question14, question15,
        question16, question17, question18, question19, question20
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
        <h1>Relatório Semestral de Aluno Regular</h1>
        <p>
          Ao enviar este relatório, o aluno declara serem verdadeiras todas as informações nele relatadas, incluindo aquelas relativas aos artigos atualmente submetidos (ainda em avaliação) ou aceitos para publicação, mas ainda não publicados. Em caso de solicitação por parte da CCP-PPgSI declaro ter todos os documentos necessários para comprovação das informações apresentadas.<br /><br />

          Algumas intruções de como cadastrar o mestrado doutorado no CV Lattes estão nesse <a href="http://ppgsi.each.usp.br/arquivos/PPgSI-cadastro-do-mestrado-em-andamento-no-CV-Lattes.pdf">link.</a> E os procedimentos, instruções e critérios de avaliação do relatório estão disponíveis neste <a href="http://ppgsi.each.usp.br/relatorio-semestral-instrucoesnovo">link.</a><br /><br />

          A coordenação do PPgSI utiliza critérios de avaliação objetivos para avaliar o desempenho dos alunos em cada semestre, mas entende que existem situações excepcionais que exigem uma análise diferenciada e por isso é importante que tanto alunos quanto o orientadores façam um relato detalhado sobre o andamento do projeto para que a CCP consiga entender as circunstâncias de execução do trabalho. Espera-se, por exemplo, que os alunos relatem o impacto da pandemia do covid-19 na execução de seus projetos.<br />
        </p>

        <fieldset>
          <InputBlock>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputBlock>
        </fieldset>

        <fieldset>
          <legend>Dados gerais</legend>
          <InputBlock>
            <label>Nome do Aluno</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Nome do Orientador</label>
            <input
              type="text"
              name="nameOrientador"
              value={nameOrientador}
              onChange={e => setNameOrientador(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Número USP</label>
            <input
              type="number"
              name="numberUsp"
              value={numberUsp}
              onChange={e => setNumberUsp(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Link para o curriculum lattes.</label>
            <input
              type="text"
              name="linkLattes"
              value={linkLattes}
              onChange={e => setLinkLattes(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Data da última atualização do lattes</label>
            <input
              type="text"
              name="dateLattes"
              value={dateLattes}
              onChange={e => setDateLattes(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Qual foi o resultado da avaliação do seu último relatório?</label>
            <select
              name="question1"
              value={question1}
              onChange={e => setQuestion1(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Aprovado com ressalvas">Aprovado com ressalvas</option>
              <option value="Insatisfatório">Insatisfatório</option>
              <option value="Não se aplica (é o meu primeiro relatório)">Não se aplica (é o meu primeiro relatório)</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Qual seu curso?</label>
            <select
              name="curso"
              value={curso}
              onChange={e => setCurso(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="Mestrado">Mestrado</option>
              <option value="Doutorado">Doutorado</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Este relatório é referente a que semestre do seu curso? (último semestre concluído)?</label>
            <select
              name="question2"
              value={question2}
              onChange={e => setQuestion2(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="1º semestre do curso">1º semestre do curso</option>
              <option value="2º semestre do curso">2º semestre do curso</option>
              <option value="3º semestre do curso">3º semestre do curso</option>
              <option value="4º semestre do curso">4º semestre do curso</option>
              <option value="5º semestre do curso">5º semestre do curso</option>
              <option value="6º semestre do curso">6º semestre do curso</option>
              <option value="7º semestre do curso">7º semestre do curso</option>
              <option value="8º semestre do curso">8º semestre do curso</option>
            </select>
          </InputBlock>
          <InputBlock>
            <legend>Atividades Didáticas</legend>
            <label>Em quantas disciplinas obrigatórias você já obteve aprovação?</label>
            <input
              type="text"
              name="question3"
              value={question3}
              onChange={e => setQuestion3(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Em quantas disciplinas optativas você já obteve aprovação?</label>
            <input
              type="text"
              name="question4"
              value={question4}
              onChange={e => setQuestion4(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados? Caso não, espere até 2 dias antes da data máxima definida no site
              do PPgSI para enviar o seu relatório.</label>
            <select
              name="question5"
              value={question5}
              onChange={e => setQuestion5(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Em quantas disciplinas você foi reprovado desde o início do mestrado/doutorado?</label>
            <select
              name="question6"
              value={question6}
              onChange={e => setQuestion6(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Em quantas disciplinas você foi reprovado no último semestre cursado?</label>
            <select
              name="question7"
              value={question7}
              onChange={e => setQuestion7(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="Já terminei as disciplinas">Já terminei as disciplinas</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Você já foi aprovado no exame de proficiência em idiomas?</label>
            <select
              name="question8"
              value={question8}
              onChange={e => setQuestion8(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </InputBlock>
          <InputBlock>
            <legend>Atividades De Pesquisa</legend>
            <label>Você já realizou o exame de qualificação?</label>
            <select
              name="question9"
              value={question9}
              onChange={e => setQuestion9(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="Sim. Fui Aprovado">Sim. Fui Aprovado</option>
              <option value="Sim. Fui Reprovado">Sim. Fui Reprovado</option>
              <option value="Não">Não</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Se não qualificou, quanto tempo falta para o limite máximo de qualificação?</label>
            <select
              name="question10"
              value={question10}
              onChange={e => setQuestion10(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="Menos de 3 meses">Menos de 3 meses</option>
              <option value="Entre 3 e 6 meses">Entre 3 e 6 meses</option>
              <option value="Mais de 6 meses">Mais de 6 meses</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Se você já fez sua qualificação e foi aprovado, quanto tempo falta para o limite máximo do depósito da sua dissertação/tese?</label>
            <select
              name="question11"
              value={question11}
              onChange={e => setQuestion11(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="Menos de 3 meses">Menos de 3 meses</option>
              <option value="Entre 3 e 6 meses">Entre 3 e 6 meses</option>
              <option value="Mais de 6 meses">Mais de 6 meses</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Quantos artigos referentes a sua pesquisa de mestrado/doutorado você teve aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu
              currículo Lattes)</label>
            <select
              name="question12"
              value={question12}
              onChange={e => setQuestion12(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="Mais de 2">Mais de 2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Quantos artigos você submeteu e ainda estão aguardando resposta?</label>
            <select
              name="question13"
              value={question13}
              onChange={e => setQuestion13(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="Mais de 2">Mais de 2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Você possui artigo em preparação para submissão? Qual o estágio dele?</label>
            <select
              name="question14"
              value={question14}
              onChange={e => setQuestion14(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="Não possuo">Não possuo</option>
              <option value="Experimentos em elaboração">Experimentos em elaboração</option>
              <option value="Aguardando coleta de dados">Aguardando coleta de dados</option>
              <option value="Em fase de escrita">Em fase de escrita</option>
              <option value="Em fase de tradução">Em fase de tradução</option>
              <option value="Preparando resposta para os revisores">Preparando resposta para os revisores</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que
              já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que
              ainda incompleta). Faça uma descrição detalhada.</label>
            <textarea
              name="question15"
              value={question15}
              onChange={e => setQuestion15(e.target.value)}>
            </textarea>
          </InputBlock>
          <InputBlock>
            <label>Você participou de algum congressos no país? Se sim, indicar local, se houve
              apresentação de trabalho e se o congresso é ou não internacional.</label>
            <input
              name="question16"
              value={question16}
              onChange={e => setQuestion16(e.target.value)}>
            </input>
          </InputBlock>
          <InputBlock>
            <label>Você participou de algum congresso no exterior? Se sim, indicar local e se
              houve apresentação de trabalho. </label>
            <input
              name="question17"
              value={question17}
              onChange={e => setQuestion17(e.target.value)}>
            </input>
          </InputBlock>
          <InputBlock>
            <label>Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior
              (incluindo sanduíche)? Se sim, indique o nome da universidade e o período.</label>
            <input
              name="question18"
              value={question18}
              onChange={e => setQuestion18(e.target.value)}>
            </input>
          </InputBlock>
          <InputBlock>
            <label>Você tem algo a mais a declarar para a CCP - PPgSI?</label>
            <textarea
              name="question19"
              value={question19}
              onChange={e => setQuestion19(e.target.value)}>
            </textarea>
          </InputBlock>
          <legend>Reavaliação do desempenho do orientando</legend>
          <p>
            Apenas para reapresentação de relatórios que receberam parecer “insatisfatório”
            pela CCP-PPgSI a fim de obter uma reavaliação.
            <br /><br />

            A prerrogativa de entregar uma nova versão do relatório é oferecida ao
            orientando assumindo situações em que, por exemplo, ele precise ou queira
            esclarecer ou incluir informações que sejam relativas exclusivamente ao período
            avaliado neste relatório (ou seja, apenas o semestre anterior já encerrado), tais
            como:
            <br /><br />

            - Explicar melhor alguma atividade realizada no período em questão que não foi
            bem explicada na primeira versão do relatório e, portanto, não avaliada
            apropriadamente de acordo com a visão do orientando e do orientador.
            <br />
            - Incluir alguma atividade realizada no período em questão, mas que o orientando
            havia esquecido de incluir e que pode ter possivelmente prejudicado a avaliação
            de seu desempenho.
            <br />
            - Argumentar os motivos pelos quais ele considera que apesar de suas atividades
            no período em questão terem sido exatamente aquelas (de forma que nada novo
            precisa ser adicionado), ainda assim orientando e orientador consideram que o
            desempenho não deveria ter sido considerado “insatisfatório”.
          </p>
          <InputBlock>
            <label>Comentários finais do ORIENTANDO sobre seu desempenho no último semestre, considerando o relatório reapresentado: </label>
            <textarea
              name="question20"
              value={question20}
              onChange={e => setQuestion20(e.target.value)}>
            </textarea>
          </InputBlock>

          <button type="submit">ENVIAR</button>
        </fieldset>
      </FormBox>
    </Container>
  );
}