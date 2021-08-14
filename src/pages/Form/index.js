import React, { useState } from 'react';
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

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("entrou")
    try {
      const response = await formsApi.create({email});

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
              required
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
              type="text"
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
              type="text"
              name="question1"
              value={question1}
              onChange={e => setQuestion1(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="">Aprovado</option>
              <option value="">Aprovado com ressalvas</option>
              <option value="">Insatisfatório</option>
              <option value="">Não se aplica (é o meu primeiro relatório)</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Qual seu curso?</label>
            <select
              type="text"
              name="curso"
              value={curso}
              onChange={e => setCurso(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="">Mestrado</option>
              <option value="">Doutorado</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Este relatório é referente a que semestre do seu curso? (último semestre concluído)?</label>
            <select
              type="text"
              name="question2"
              value={question2}
              onChange={e => setQuestion2(e.target.value)}
            >             
              <option value="">Selecione uma opção</option>
              <option value="">1º semestre do curso</option>
              <option value="">2º semestre do curso</option>
              <option value="">3º semestre do curso</option>
              <option value="">4º semestre do curso</option>
              <option value="">5º semestre do curso</option>
              <option value="">6º semestre do curso</option>
              <option value="">7º semestre do curso</option>
              <option value="">8º semestre do curso</option>
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
              type="text"
              name="question5"
              value={question5}
              onChange={e => setQuestion5(e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value="">Sim</option>
              <option value="">Não</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Em quantas disciplinas você foi reprovado desde o início do mestrado/doutorado?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Em quantas disciplinas você foi reprovado no último semestre cursado?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">Já terminei as disciplinas</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Você já foi aprovado no exame de proficiência em idiomas?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">Sim</option>
              <option value="">Não</option>
            </select>
          </InputBlock>
          <InputBlock>
            <legend>Atividades De Pesquisa</legend>
            <label>Você já realizou o exame de qualificação?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">Sim.Fui Aprovado</option>
              <option value="">Sim.Fui Reprovado</option>
              <option value="">Não</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Se não qualificou, quanto tempo falta para o limite máximo de qualificação?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">Menos de 3 meses</option>
              <option value="">Entre 3 e 6 meses</option>
              <option value="">Mais de 6 meses</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Se você já fez sua qualificação e foi aprovado, quanto tempo falta para o limite máximo do depósito da sua dissertação/tese?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">Menos de 3 meses</option>
              <option value="">Entre 3 e 6 meses</option>
              <option value="">Mais de 6 meses</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Quantos artigos referentes a sua pesquisa de mestrado/doutorado você teve aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu
              currículo Lattes)</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">Mais de 2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Quantos artigos você submeteu e ainda estão aguardando resposta?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">Mais de 2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Você possui artigo em preparação para submissão? Qual o estágio dele?</label>
            <select name="subject" id="subject">
              <option value="">Selecione uma opção</option>
              <option value="">Não possuo</option>
              <option value="">Experimentos em elaboração</option>
              <option value="">Aguardando coleta de dados</option>
              <option value="">Em fase de escrita</option>
              <option value="">Em fase de tradução</option>
              <option value="">Preparando resposta para os revisores</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que
              já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que
              ainda incompleta). Faça uma descrição detalhada.</label>
            <textarea name="bio" id="bio"></textarea>
          </InputBlock>
          <InputBlock>
            <label>Você participou de algum congressos no país? Se sim, indicar local, se houve
              apresentação de trabalho e se o congresso é ou não internacional.</label>
            <input name="bio" id="bio"></input>
          </InputBlock>
          <InputBlock>
            <label>Você participou de algum congresso no exterior? Se sim, indicar local e se
              houve apresentação de trabalho. </label>
            <input name="bio" id="bio"></input>
          </InputBlock>
          <InputBlock>
            <label>Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior
              (incluindo sanduíche)? Se sim, indique o nome da universidade e o período.</label>
            <input name="bio" id="bio"></input>
          </InputBlock>
          <InputBlock>
            <label>Você tem algo a mais a declarar para a CCP - PPgSI?</label>
            <textarea name="bio" id="bio"></textarea>
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
            <textarea name="bio" id="bio"></textarea>
          </InputBlock>

          <button type="submit">ENVIAR</button>
        </fieldset>
      </FormBox>
    </Container>
  );
}