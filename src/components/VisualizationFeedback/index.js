import React, { useState, useEffect } from 'react';
import feedbackApi from '../../services/feedback';
import orientadorApi from '../../services/orientador';
import { Container, DataBox, TextBlock } from './styles';
import { useFeedback } from '../../context/feedbackContext';

export default function Visualization() {
  const { nameAluno } = useFeedback();

  const [email, setEmail] = useState("");
  const [nameCompleto, setNameCompleto] = useState("");
  const [comment, setComment] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [orientadorId, setOrientadorId] = useState("");

  useEffect(() => {
    const getOrientador = async () => {
      try {
        const response = await orientadorApi.read(orientadorId);
        if (response.status === 200) {
          setEmail(response.data.email);
          setNameCompleto(response.data.name);
          console.log("Dados do orientador recebidos com sucesso!")
        }
      } catch (error) {
        console.log("Falha ao buscar dados");
      }
    }
    getOrientador();
  }, [orientadorId]);

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const response = await feedbackApi.readOrientador({ name: nameAluno });

        console.log(response);
        if (response.status === 200) {
          setComment(response.data.comment);
          setEvaluation(response.data.evaluation);
          setOrientadorId(response.data.orientadorId);
          console.log("Dados recebidos com sucesso!")
        }
      } catch (error) {
        console.log("Falha ao buscar dados");
      }
    }
    getFeedback();
  }, [nameAluno]);

  return (
    <>
      {
        nameCompleto !== "" ? (
          <Container>
            <DataBox>
              <h1>Visualização do Feedback</h1>

              <fieldset>
                <TextBlock>
                  <h3>Email</h3>
                  <p>{email}</p>
                </TextBlock>
                <TextBlock>
                  <h3>Nome Completo</h3>
                  <p>{nameCompleto}</p>
                </TextBlock>
                <TextBlock>
                  <h3>Avaliação</h3>
                  <p>{evaluation}</p>
                </TextBlock>
                <TextBlock>
                  <h3>Comentário</h3>
                  <p>{comment}</p>
                </TextBlock>

              </fieldset>

            </DataBox>
          </Container>
        ) : (
          <>
          </>
        )
      }
    </>
  );
}