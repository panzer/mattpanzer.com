import styled from "styled-components";
import MediaQueries from "./MediaQueries";
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

const A = styled.a`
  font-family: "Inconsolata", monospace;
  font-size: 22px;
  color: inherit;
  cursor: pointer;
  text-decoration: underline;

  &:visited {
    letter-spacing: 1px;
  }

  &:hover {
    animation-name: ahover;
    animation-duration: 0.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  ${MediaQueries.small} {
    font-size: 18px;
  }

  @keyframes ahover {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.6;
    }
  }
`;

const ALink = A.withComponent(HashLink)

export default A;
export {ALink}