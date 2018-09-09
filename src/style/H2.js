import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const H2 = styled.h2`
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  margin-bottom: 0px;
  font-size: 54px;
  text-align: ${props => (props.center ? "center" : "left")};
  text-transform: capitalize;

  ${MediaQueries.small} {
    font-size: 32px;
  }
`;

export default H2;
