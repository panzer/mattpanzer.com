import React, { Component } from "react";
import styled from "styled-components";
import { H1, H2, H3, P, FullScreenSection, MediaQueries } from "../style";
import { Hero, Bio, Projects } from "../components";

const content = require("../data/content.json");

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 0;
  align-items: stretch;
  flex-flow: column;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Hero content={content} />
        <Bio content={content} />
        <Projects content={content} />
      </Wrapper>
    );
  }
}

export default App;
