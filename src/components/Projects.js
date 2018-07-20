import React, { Component } from "react";
import { H1, H2, H3, P, FullScreenSection, MediaQueries } from "../style";
import styled from "styled-components";

const Wrapper = FullScreenSection.extend`
  background-color: #80deea;
`;

const Showcase = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
  background-color: #fff;
  width: 220px;
  height: 330px;
  margin-bottom: 10px;
  text-align: center;
  ${MediaQueries.small} {
    width: 150px;
    height: 225px;
  }
`;

const Img = styled.img`
  width: calc(100% - 30px);
  height: auto;
  flex: 0 2 auto;
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
      <Wrapper>
        <H1>what I've done and what I'm doing</H1>
        <Showcase>
          {content.projects.map((p, i) => (
            <Project key={i}>
              {p.media[0] && <Img src={p.media[0]} />}
              <Title>
                <H3>{p.short_name}</H3>
              </Title>
            </Project>
          ))}
        </Showcase>
      </Wrapper>
    );
  }
}

export default Projects;
