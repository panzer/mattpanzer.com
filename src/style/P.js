import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const P = styled.p`
  font-family: "Inconsolata", monospace;
  font-size: 18px;

  ${MediaQueries.small} {
    font-size: 16px;
  }
`;

export default P;
