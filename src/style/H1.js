import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const H1 = styled.h1`
  font-family: "Gaegu", sans-serif;
  margin-bottom: 50px;
  font-size: 64px;
  text-align: center;
  letter-spacing: -3px;
  ${MediaQueries.small} {
    font-size: 42px;
  }
`;

export default H1;
