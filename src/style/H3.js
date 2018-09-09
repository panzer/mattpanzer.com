import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const H3 = styled.h3`
  font-family: "Permanent Marker", sans-serif;
  margin: 0;
  font-size: 36px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;

  ${MediaQueries.small} {
    font-size: 26px;
    line-height: 28px;
  }
`;

export default H3;
