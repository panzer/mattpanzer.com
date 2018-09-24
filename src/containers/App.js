import React, { Component } from "react";
import styled from "styled-components";
import { Hero, Bio, Projects } from "../components";
import scrollToElement from "scroll-to-element";

import content from "../data/content.js";

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 0;
  align-items: stretch;
  flex-flow: column;
`;

class App extends Component {
  scrollToAnchor() {
    if (this.props) {
      const el = this.props.history.location.hash;
      if (el) {
        console.log(el);
        scrollToElement(el);
      }
    }
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    // let hash = window.decodeURIComponent(window.location.hash);
    // hash = hash.replace("#", "");
    this.scrollToAnchor();
    window.onhashchange = this.scrollToAnchor;
    window.addEventListener("resize", () => this.updateDimensions());
  }
  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateDimensions());
  }
  componentWillMount() {
    this.updateDimensions();
  }

  componentDidUpdate() {
    this.scrollToAnchor();
  }

  render(props) {
    const { width, height } = this.state;
    return (
      <Wrapper key={width * width * height}>
        <Hero content={content} width={width} height={height} />
        <Bio content={content} />
        <Projects content={content} />
      </Wrapper>
    );
  }
}

export default App;
