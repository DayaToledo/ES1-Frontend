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
        <h1>Relat??rio Semestral de Aluno Regular</h1>
        <p>
          Ao enviar este relat??rio, o aluno declara serem verdadeiras todas as informa????es nele relatadas, incluindo aquelas relativas aos artigos atualmente submetidos (ainda em avalia????o) ou aceitos para publica????o, mas ainda n??o publicados. Em caso de solicita????o por parte da CCP-PPgSI declaro ter todos os documentos necess??rios para comprova????o das informa????es apresentadas.<br /><br />

          Algumas intru????es de como cadastrar o mestrado doutorado no CV Lattes est??o nesse <a href="http://ppgsi.each.usp.br/arquivos/PPgSI-cadastro-do-mestrado-em-andamento-no-CV-Lattes.pdf">link.</a> E os procedimentos, instru????es e crit??rios de avalia????o do relat??rio est??o dispon??veis neste <a href="http://ppgsi.each.usp.br/relatorio-semestral-instrucoesnovo">link.</a><br /><br />

          A coordena????o do PPgSI utiliza crit??rios de avalia????o objetivos para avaliar o desempenho dos alunos em cada semestre, mas entende que existem situa????es excepcionais que exigem uma an??lise diferenciada e por isso ?? importante que tanto alunos quanto o orientadores fa??am um relato detalhado sobre o andamento do projeto para que a CCP consiga entender as circunst??ncias de execu????o do trabalho. Espera-se, por exemplo, que os alunos relatem o impacto da pandemia do covid-19 na execu????o de seus projetos.<br />
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
            <label>N??mero USP</label>
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
            <label>Data da ??ltima atualiza????o do lattes</label>
            <input
              type="text"
              name="dateLattes"
              value={dateLattes}
              onChange={e => setDateLattes(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Qual foi o resultado da avalia????o do seu ??ltimo relat??rio?</label>
            <select
              name="question1"
              value={question1}
              onChange={e => setQuestion1(e.target.value)}
            >
              <option value="">Selecione uma op????o</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Aprovado com ressalvas">Aprovado com ressalvas</option>
              <option value="Insatisfat??rio">Insatisfat??rio</option>
              <option value="N??o se aplica (?? o meu primeiro relat??rio)">N??o se aplica (?? o meu primeiro relat??rio)</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Qual seu curso?</label>
            <select
              name="curso"
              value={curso}
              onChange={e => setCurso(e.target.value)}
            >
              <option value="">Selecione uma op????o</option>
              <option value="Mestrado">Mestrado</option>
              <option value="Doutorado">Doutorado</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Este relat??rio ?? referente a que semestre do seu curso? (??ltimo semestre conclu??do)?</label>
            <select
              name="question2"
              value={question2}
              onChange={e => setQuestion2(e.target.value)}
            >
              <option value="">Selecione uma op????o</option>
              <option value="1?? semestre do curso">1?? semestre do curso</option>
              <option value="2?? semestre do curso">2?? semestre do curso</option>
              <option value="3?? semestre do curso">3?? semestre do curso</option>
              <option value="4?? semestre do curso">4?? semestre do curso</option>
              <option value="5?? semestre do curso">5?? semestre do curso</option>
              <option value="6?? semestre do curso">6?? semestre do curso</option>
              <option value="7?? semestre do curso">7?? semestre do curso</option>
              <option value="8?? semestre do curso">8?? semestre do curso</option>
            </select>
          </InputBlock>
          <InputBlock>
            <legend>Atividades Did??ticas</legend>
            <label>Em quantas disciplinas obrigat??rias voc?? j?? obteve aprova????o?</label>
            <input
              type="text"
              name="question3"
              value={question3}
              onChange={e => setQuestion3(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Em quantas disciplinas optativas voc?? j?? obteve aprova????o?</label>
            <input
              type="text"
              name="question4"
              value={question4}
              onChange={e => setQuestion4(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Todos os conceitos em disciplinas cursadas no ??ltimo semestre j?? foram divulgados? Caso n??o, espere at?? 2 dias antes da data m??xima definida no site
              do PPgSI para enviar o seu relat??rio.</label>
            <select
              name="question5"
              value={question5}
              onChange={e => setQuestion5(e.target.value)}
            >
              <option value="">Selecione uma op????o</option>
              <option value="Sim">Sim</option>
              <option value="N??o">N??o</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Em quantas disciplinas voc?? foi reprovado desde o in??cio do mestrado/doutorado?</label>
            <select
              name="question6"
              value={question6}
              onChange={e => setQuestion6(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Em quantas disciplinas voc?? foi reprovado no ??ltimo semestre cursado?</label>
            <select
              name="question7"
              value={question7}
              onChange={e => setQuestion7(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="J?? terminei as disciplinas">J?? terminei as disciplinas</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Voc?? j?? foi aprovado no exame de profici??ncia em idiomas?</label>
            <select
              name="question8"
              value={question8}
              onChange={e => setQuestion8(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="Sim">Sim</option>
              <option value="N??o">N??o</option>
            </select>
          </InputBlock>
          <InputBlock>
            <legend>Atividades De Pesquisa</legend>
            <label>Voc?? j?? realizou o exame de qualifica????o?</label>
            <select
              name="question9"
              value={question9}
              onChange={e => setQuestion9(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="Sim. Fui Aprovado">Sim. Fui Aprovado</option>
              <option value="Sim. Fui Reprovado">Sim. Fui Reprovado</option>
              <option value="N??o">N??o</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Se n??o qualificou, quanto tempo falta para o limite m??ximo de qualifica????o?</label>
            <select
              name="question10"
              value={question10}
              onChange={e => setQuestion10(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="Menos de 3 meses">Menos de 3 meses</option>
              <option value="Entre 3 e 6 meses">Entre 3 e 6 meses</option>
              <option value="Mais de 6 meses">Mais de 6 meses</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Se voc?? j?? fez sua qualifica????o e foi aprovado, quanto tempo falta para o limite m??ximo do dep??sito da sua disserta????o/tese?</label>
            <select
              name="question11"
              value={question11}
              onChange={e => setQuestion11(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="Menos de 3 meses">Menos de 3 meses</option>
              <option value="Entre 3 e 6 meses">Entre 3 e 6 meses</option>
              <option value="Mais de 6 meses">Mais de 6 meses</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Quantos artigos referentes a sua pesquisa de mestrado/doutorado voc?? teve aceitos ou publicados? (Obs: Voc?? deve inserir os artigos publicados no seu
              curr??culo Lattes)</label>
            <select
              name="question12"
              value={question12}
              onChange={e => setQuestion12(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="Mais de 2">Mais de 2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Quantos artigos voc?? submeteu e ainda est??o aguardando resposta?</label>
            <select
              name="question13"
              value={question13}
              onChange={e => setQuestion13(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="Mais de 2">Mais de 2</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Voc?? possui artigo em prepara????o para submiss??o? Qual o est??gio dele?</label>
            <select
              name="question14"
              value={question14}
              onChange={e => setQuestion14(e.target.value)}>
              <option value="">Selecione uma op????o</option>
              <option value="N??o possuo">N??o possuo</option>
              <option value="Experimentos em elabora????o">Experimentos em elabora????o</option>
              <option value="Aguardando coleta de dados">Aguardando coleta de dados</option>
              <option value="Em fase de escrita">Em fase de escrita</option>
              <option value="Em fase de tradu????o">Em fase de tradu????o</option>
              <option value="Preparando resposta para os revisores">Preparando resposta para os revisores</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Qual o est??gio atual de sua pesquisa? Apresente toda e qualquer atividade que
              j?? tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que
              ainda incompleta). Fa??a uma descri????o detalhada.</label>
            <textarea
              name="question15"
              value={question15}
              onChange={e => setQuestion15(e.target.value)}>
            </textarea>
          </InputBlock>
          <InputBlock>
            <label>Voc?? participou de algum congressos no pa??s? Se sim, indicar local, se houve
              apresenta????o de trabalho e se o congresso ?? ou n??o internacional.</label>
            <input
              name="question16"
              value={question16}
              onChange={e => setQuestion16(e.target.value)}>
            </input>
          </InputBlock>
          <InputBlock>
            <label>Voc?? participou de algum congresso no exterior? Se sim, indicar local e se
              houve apresenta????o de trabalho. </label>
            <input
              name="question17"
              value={question17}
              onChange={e => setQuestion17(e.target.value)}>
            </input>
          </InputBlock>
          <InputBlock>
            <label>Voc?? realizou algum est??gio de pesquisa ou visita de pesquisa no exterior
              (incluindo sandu??che)? Se sim, indique o nome da universidade e o per??odo.</label>
            <input
              name="question18"
              value={question18}
              onChange={e => setQuestion18(e.target.value)}>
            </input>
          </InputBlock>
          <InputBlock>
            <label>Voc?? tem algo a mais a declarar para a CCP - PPgSI?</label>
            <textarea
              name="question19"
              value={question19}
              onChange={e => setQuestion19(e.target.value)}>
            </textarea>
          </InputBlock>
          <legend>Reavalia????o do desempenho do orientando</legend>
          <p>
            Apenas para reapresenta????o de relat??rios que receberam parecer ???insatisfat??rio???
            pela CCP-PPgSI a fim de obter uma reavalia????o.
            <br /><br />

            A prerrogativa de entregar uma nova vers??o do relat??rio ?? oferecida ao
            orientando assumindo situa????es em que, por exemplo, ele precise ou queira
            esclarecer ou incluir informa????es que sejam relativas exclusivamente ao per??odo
            avaliado neste relat??rio (ou seja, apenas o semestre anterior j?? encerrado), tais
            como:
            <br /><br />

            - Explicar melhor alguma atividade realizada no per??odo em quest??o que n??o foi
            bem explicada na primeira vers??o do relat??rio e, portanto, n??o avaliada
            apropriadamente de acordo com a vis??o do orientando e do orientador.
            <br />
            - Incluir alguma atividade realizada no per??odo em quest??o, mas que o orientando
            havia esquecido de incluir e que pode ter possivelmente prejudicado a avalia????o
            de seu desempenho.
            <br />
            - Argumentar os motivos pelos quais ele considera que apesar de suas atividades
            no per??odo em quest??o terem sido exatamente aquelas (de forma que nada novo
            precisa ser adicionado), ainda assim orientando e orientador consideram que o
            desempenho n??o deveria ter sido considerado ???insatisfat??rio???.
          </p>
          <InputBlock>
            <label>Coment??rios finais do ORIENTANDO sobre seu desempenho no ??ltimo semestre, considerando o relat??rio reapresentado: </label>
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