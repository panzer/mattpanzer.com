import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const H3 = styled.h3`
  font-family: "Permanent Marker", cursive;
  margin: 0;
  font-size: 40px;
  line-height: 43px;
  text-align: center;
  text-transform: uppercase;

  ${MediaQueries.small} {
    font-size: 26px;
    line-height: 28px;
  }
`;

export default H3;
