import "./styles.css";
import styled from "styled-components";

const ContainerRow = styled.div`
  height: 300px;
  width: 80px;
  border: 2px solid black;
`;

const ContainerColumn = styled.div`
  height: 96px;
  width: 80px;
  border: 2px solid orange;
`;

const Box = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <Box>
      <ContainerRow>
        <ContainerColumn></ContainerColumn>
        <ContainerColumn></ContainerColumn>
        <ContainerColumn></ContainerColumn>
      </ContainerRow>
      <ContainerRow>
        <ContainerColumn></ContainerColumn>
        <ContainerColumn></ContainerColumn>
        <ContainerColumn></ContainerColumn>
      </ContainerRow>
      <ContainerRow>
        <ContainerColumn></ContainerColumn>
        <ContainerColumn></ContainerColumn>
        <ContainerColumn></ContainerColumn>
      </ContainerRow>
      <ContainerRow>
        <ContainerColumn></ContainerColumn>
        <ContainerColumn></ContainerColumn>
        <ContainerColumn></ContainerColumn>
      </ContainerRow>
    </Box>
  );
}
