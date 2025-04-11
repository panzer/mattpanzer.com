import React, { Component } from "react";
import { H1, P, FullScreenSection, MediaQueries } from "../style";
import styled from "styled-components";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../sketch.js";

const Wrapper = styled(FullScreenSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: rgba(0, 0, 0, 0);
  ${MediaQueries.small} {
    background-color: #212121;
  }
  text-align: center;
  color: white;

  &:after {
    background: linear-gradient(-40deg, #fff 8px, transparent 0),
      linear-gradient(40deg, #fff 8px, transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 16px 16px;
    content: " ";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 16px;
  }
`;

const P5Positioner = styled.div`
  position: absolute;
  z-index: -1;
`;

class Hero extends Component {
  render() {
    const { width, height, content } = this.props;
    // console.log(width, height);
    return (
      <Wrapper id="start" className="canvas-parent">
        {width > 767 && (
          <P5Positioner>
            <ReactP5Wrapper sketch={sketch} width={width} height={height} />
          </P5Positioner>
        )}
        <H1>hi, I'm {content.nickname} 👋🏻</H1>
        <P>scroll to learn more about me</P>
      </Wrapper>
    );
  }
}

export default Hero;
