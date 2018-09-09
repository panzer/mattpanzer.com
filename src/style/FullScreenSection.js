import styled from "styled-components";
import MediaQueries from "./MediaQueries";

const FullScreenSection = styled.div`
  min-height: 100vh;
  padding: 0px 15%;

  ${MediaQueries.small} {
    padding: 0px 7%;
  }
`;

export default FullScreenSection;
