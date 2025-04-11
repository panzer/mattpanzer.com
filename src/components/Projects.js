import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { H1, P, A, FullScreenSection, MediaQueries } from "../style";
import styled from "styled-components";

const Wrapper = styled(FullScreenSection)`
  text-align: center;
  padding: 0px 10%;
  background-color: #ffd54f;

  &:before {
    display: block;
    position: absolute;
    width: 100%;
    height: 10px;
    margin-top: -10px;
    background-color: rgba(0, 0, 0, 0);
    border-top: 5px solid #ffd54f;
    content: " ";
    left: 0px;
  }
`;

const Showcase = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const Project = styled(Link)`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
  background-color: #fff;
  width: 220px;
  height: 320px;
  margin: 5px;
  text-align: center;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.3);
  ${MediaQueries.small} {
    width: 150px;
    height: 225px;
  }
`;

const Img = styled.img`
  width: calc(100% - 30px);
  height: auto;
  padding: 15px 15px 0px 15px;
`;

const Title = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
`;

class Projects extends Component {
  render() {
    const content = this.props.content;
    return (
      <Wrapper id="projects">
        <H1>my projects</H1>
        <P>click to learn more</P>
        <Showcase>
          {content.projects.map((p, i) => (
            <Project to={`/project/${p.uid}`} key={i}>
              {p.media[0] && <Img src={p.media[0]} />}
              <Title>
                <b>{p.short_name}</b>
              </Title>
            </Project>
          ))}
        </Showcase>
      </Wrapper>
    );
  }
}

export default Projects;
