import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const P = styled.p`
  font-family: "Inconsolata", monospace;
  font-size: 22px;
  white-space: pre-line;

  ${MediaQueries.small} {
    font-size: 18px;
  }
`;

export default P;
