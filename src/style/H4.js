import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const H4 = styled.h4`
  font-family: "Roboto Slab", serif;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: -15px;
  font-size: 30px;
  line-height: 32px;
  text-transform: uppercase;

  ${MediaQueries.small} {
    font-size: 22px;
    line-height: 24px;
  }
`;

export default H4;
