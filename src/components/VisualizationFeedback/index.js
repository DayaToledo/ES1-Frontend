import React, { useState, useEffect } from 'react';
import feedbackApi from '../../services/feedback';
import { Container, DataBox, TextBlock } from './styles';
import { useFeedback } from '../../context/feedbackContext';

export default function Visualization() {
    const { nameAluno } = useFeedback();

    const [email, setEmail] = useState("");
    const [nameCompleto, setNameCompleto] = useState("");
    const [data, setData] = useState([]);
  
    // useEffect(() => {
    //   const getAlunos = async () => {
    //     try {
    //       const response = await OrientadoresApi.read(data.id);
    //       if (response.status === 200) {
    //         setEmail(response.data.email);
    //         setNameCompleto(response.data.name);
    //     }
    //     } catch (error) {
    //       console.log("Falha ao buscar dados");
    //     }
    //   }
    //   getAlunos();
    // }, [data]);
  
    useEffect(() => {
      const getData = async () => {
        try {
            
            const response = await feedbackApi.read({ name:nameAluno });
  
            console.log(response);
            if (response.status === 200) {
              setData(response.data);
              console.log("Dados recebidos com sucesso!")
            }
          
        } catch (error) {
          console.log("Falha ao buscar dados");
        }
      }
      getData();
    }, [nameAluno]);
  
  return (
    <Container>
      <DataBox>
        <h1>Visualização do Feedback</h1>

            <fieldset>
              <TextBlock>
                <h3>Email</h3>
                <p>{data.email}</p>
              </TextBlock>
              <TextBlock>
                <h3>Nome Completo</h3>
                <p>{data.nameCompleto}</p>
              </TextBlock>
              <TextBlock>
                <h3>Avaliação</h3>
                <p>{data.evaluation}</p>
              </TextBlock>
              <TextBlock>
                <h3>Comentário</h3>
                <p>{data.comment}</p>
              </TextBlock>
              
            </fieldset>
          
      </DataBox>
    </Container>
  );
}