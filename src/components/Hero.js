import React, { Component } from "react";
import { H1, P, FullScreenSection } from "../style";
import styled from "styled-components";

const Wrapper = FullScreenSection.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #212121;
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

class Hero extends Component {
  render() {
    const content = this.props.content;
    return (
      <Wrapper id="start">
        <H1>hi, I'm {content.nickname}.</H1>
        <P>scroll to learn more about me</P>
      </Wrapper>
    );
  }
}

export default Hero;
