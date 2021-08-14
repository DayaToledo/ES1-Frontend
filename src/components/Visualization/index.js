import React, { useState, useEffect } from 'react';
import formsApi from '../../services/forms';
import alunoApi from '../../services/aluno';
import { Container, DataBox, TextBlock } from './styles';

export default function Visualization() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAlunos = async () => {
      try {
        const response = await alunoApi.read();
        if (response.status === 200) {
          setItems(response.data);
        }
      } catch (error) {
        console.log("Falha ao buscar dados");
      }
    }
    getAlunos();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        if (name === "") setData([]);

        if (name !== "" && name !== undefined && name !== null) {
          const response = await formsApi.read({ name });

          console.log(response);
          if (response.status === 200) {
            setData(response.data);
            console.log("Dados recebidos com sucesso!")
          }
        }
      } catch (error) {
        console.log("Falha ao buscar dados");
      }
    }
    getData();
  }, [name]);

  return (
    <Container>
      <DataBox>
        <h1>Visualização das informações</h1>

        <fieldset>
          <legend></legend>
          <TextBlock>
            <label>Selecione um aluno para visualizar os dados</label>
            <select
              name="name"
              onChange={e => setName(e.target.value)}
            >
              <option value="">Selecione um aluno</option>
              {items.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </TextBlock>
        </fieldset>

        {
          data.aluno ? (
            <fieldset>
              <legend>Dados gerais</legend>
              <TextBlock>
                <h3>Email</h3>
                <p>{data.aluno.email}</p>
              </TextBlock>
              <TextBlock>
                <h3>Nome do Aluno</h3>
                <p>{data.aluno.name}</p>
              </TextBlock>
              <TextBlock>
                <h3>Nome do Orientador</h3>
                <p>{data.aluno.nameOrientador}</p>
              </TextBlock>
              <TextBlock>
                <h3>Número USP</h3>
                <p>{data.aluno.numberUsp}</p>
              </TextBlock>
              <TextBlock>
                <h3>Link para o curriculum lattes</h3>
                <p>{data.aluno.linkLattes}</p>
              </TextBlock>
              <TextBlock>
                <h3>Data da última atualização do lattes</h3>
                <p>{data.aluno.dateLattes}</p>
              </TextBlock>
              <TextBlock>
                <h3>Qual foi o resultado da avaliação do seu último relatório?</h3>
                <p>{data.form.question1}</p>
              </TextBlock>
              <TextBlock>
                <h3>Qual seu curso?</h3>
                <p>{data.aluno.curso}</p>
              </TextBlock>
              <TextBlock>
                <h3>Este relatório é referente a que semestre do seu curso? (último semestre concluído)?</h3>
                <p>{data.form.question2}</p>
              </TextBlock>
              <legend>Atividades Didáticas</legend>
              <TextBlock>
                <h3>Em quantas disciplinas obrigatórias você já obteve aprovação?</h3>
                <p>{data.form.question3}</p>
              </TextBlock>
              <TextBlock>
                <h3>Em quantas disciplinas optativas você já obteve aprovação?</h3>
                <p>{data.form.question4}</p>
              </TextBlock>
              <TextBlock>
                <h3>Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados? Caso não, espere até 2 dias antes da data máxima definida no site
                  do PPgSI para enviar o seu relatório.</h3>
                <p>{data.form.question5}</p>
              </TextBlock>
              <TextBlock>
                <h3>Em quantas disciplinas você foi reprovado desde o início do mestrado/doutorado?</h3>
                <p>{data.form.question6}</p>
              </TextBlock>









              <TextBlock>
                <h3>Em quantas disciplinas você foi reprovado no último semestre cursado?</h3>
                <p>data.form.question7</p>
              </TextBlock>
              <TextBlock>
                <h3>Você já foi aprovado no exame de proficiência em idiomas?</h3>
                <p>data.form.question8</p>
              </TextBlock>
              <legend>Atividades De Pesquisa</legend>
              <TextBlock>
                <h3>Você já realizou o exame de qualificação?</h3>
                <p>data.form.question9</p>
              </TextBlock>
              <TextBlock>
                <h3>Se não qualificou, quanto tempo falta para o limite máximo de qualificação?</h3>
                <p>data.form.question10</p>
              </TextBlock>
              <TextBlock>
                <h3>Se você já fez sua qualificação e foi aprovado, quanto tempo falta para o limite máximo do depósito da sua dissertação/tese?</h3>
                <p>data.form.question11</p>
              </TextBlock>
              <TextBlock>
                <h3>Quantos artigos referentes a sua pesquisa de mestrado/doutorado você teve aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu
                  currículo Lattes)</h3>
                <p>data.form.question12</p>
              </TextBlock>
              <TextBlock>
                <h3>Quantos artigos você submeteu e ainda estão aguardando resposta?</h3>
                <p>data.form.question13</p>
              </TextBlock>
              <TextBlock>
                <h3>Você possui artigo em preparação para submissão? Qual o estágio dele?</h3>
                <p>data.form.question14</p>
              </TextBlock>
              <TextBlock>
                <h3>Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que
                  já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que
                  ainda incompleta). Faça uma descrição detalhada.</h3>
                <p>data.form.question15</p>
              </TextBlock>
              <TextBlock>
                <h3>Você participou de algum congressos no país? Se sim, indicar local, se houve
                  apresentação de trabalho e se o congresso é ou não internacional.</h3>
                <p>data.form.question16</p>
              </TextBlock>
              <TextBlock>
                <h3>Você participou de algum congresso no exterior? Se sim, indicar local e se
                  houve apresentação de trabalho. </h3>
                <p>data.form.question17</p>
              </TextBlock>
              <TextBlock>
                <h3>Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior
                  (incluindo sanduíche)? Se sim, indique o nome da universidade e o período.</h3>
                <p>data.form.question18</p>
              </TextBlock>
              <TextBlock>
                <h3>Você tem algo a mais a declarar para a CCP - PPgSI?</h3>
                <p>data.form.question19</p>
              </TextBlock>
              <TextBlock>
                <h3>Comentários finais do ORIENTANDO sobre seu desempenho no último semestre, considerando o relatório reapresentado: </h3>
                <p>data.form.question20</p>
              </TextBlock>
            </fieldset>
          ) : (
            <>
            </>
          )
        }
      </DataBox>
    </Container>
  );
}