import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
  "visualization"
  "visualizationFeedback"
  "feedback";
`;