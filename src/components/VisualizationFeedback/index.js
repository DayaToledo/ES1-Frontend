import React, { useState, useEffect } from 'react';
import feedbackApi from '../../services/feedback';
import orientadorApi from '../../services/orientador';
import coordenadorApi from '../../services/coordenador';
import { Container, DataBox, TextBlock } from './styles';
import { useFeedback } from '../../context/feedbackContext';

export default function Visualization(props) {
  const { nameAluno } = useFeedback();

  const [email, setEmail] = useState("");
  const [nameCompleto, setNameCompleto] = useState("");
  const [comment, setComment] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [orientadorId, setOrientadorId] = useState(null);
  const [coordenadorId, setCoordenadorId] = useState(null);

  useEffect(() => {
    const getOrientador = async () => {
      try {
        let response
        if (props.usertype === "orientador") {
         response = await orientadorApi.read(orientadorId);
        }else if (props.usertype === "coordenador") {
          response = await coordenadorApi.read(coordenadorId);
         }
        if (response.status === 200) {
          setEmail(response.data.email);
          setNameCompleto(response.data.name);
          console.log("Dados do orientador recebidos com sucesso!")
        }
      } catch (error) {
        console.log("Falha ao buscar dados");
        setNameCompleto("");
      }
    }
    getOrientador();
  }, [orientadorId, coordenadorId]);

  useEffect(() => {
    const getFeedback = async () => {
      try {
        let response; 
        
        if (props.usertype === "orientador") {
          response = await feedbackApi.readOrientador({ name: nameAluno });
        } else if (props.usertype === "coordenador") {
          response = await feedbackApi.readCoordenador({ name: nameAluno });
        }
        console.log(response);
        if (response.status === 200) {  
          setComment(response.data.comment);
          setEvaluation(response.data.evaluation);
          setOrientadorId(response.data.orientadorId);
          setCoordenadorId(response.data.coordenadorId);
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

              <h1>{props.usertype === "orientador" ? "Orientador" : "Coordenador"}</h1>

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