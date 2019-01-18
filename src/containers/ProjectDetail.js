import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { H2, H4, P, A, MediaQueries } from "../style";

import content from "../data/content.js";

const Wrapper = styled.div`
  background-color: ${({ bg_color }) => (bg_color ? bg_color : "")};
  color: ${({ txt_color }) => (txt_color ? txt_color : "")};
  padding: 5vh;
  ${MediaQueries.small} {
    padding: 3vh;
  }
`;

const Content = styled.div`
  display: flex;
  margin: auto;
  align-items: stretch;
  flex-flow: column;
  min-height: 85vh;
  ${MediaQueries.small} {
    min-height: 91vh;
  }
`;

const ImgSizer = styled.div`
  width: 40%;
  margin: 0px 30%;
  margin-bottom: 15px;
  ${MediaQueries.small} {
    width: 100%;
    margin: 0px;
    margin-bottom: 15px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  align-self: center;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.3);
`;

const ButtonSpacer = styled.div`
  display: grid;
  width: 100%;
  height: 5vh;
  bottom: 0px;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  grid-template-areas: "prev next";
  ${MediaQueries.small} {
    height: 3vh;
  }
`;

const Prev = A.extend`
  grid-area: prev;
  text-align: left;
`;

const Next = A.extend`
  grid-area: next;
  text-align: right;
`;

class ProjectDetail extends Component {
  componentDidMount() {}

  render() {
    window.scrollTo(0, 0);
    const project_index = +this.props.match.params.i;
    const project = content.projects[project_index];
    const len = content.projects.length;
    const prev_index = project_index - 1;
    const prev_project = prev_index >= 0 ? content.projects[prev_index] : null;
    const next_index = project_index + 1;
    const next_project = next_index < len ? content.projects[next_index] : null;
    const url = project.url.replace("https://", "");
    const substring = url.indexOf("/") !== -1 ? url.indexOf("/") : url.length;
    const imgIndex = project.media.length > 1 ? 1 : 0;
    return (
      <Route
        render={({ history }) => (
          <Wrapper bg_color={project.color} txt_color={project.text_color}>
            <Content>
              <A
                onClick={() => history.push("/#projects")}
              >{`<- Back to my projects`}</A>
              <H2>{project.name}</H2>

              <P>
                {`${project.start_date} -> ${project.end_date}`}
                {project.url && ` | `}
                <A href={project.url} target="_blank">
                  {url.substring(0, substring)}
                </A>
              </P>

              {project.media[imgIndex] && (
                <ImgSizer>
                  <Img src={project.media[imgIndex]} />
                </ImgSizer>
              )}

              <div>
                {project.description.map((section, i) => (
                  <div key={i}>
                    <H4>{section.header}</H4>
                    {section.text
                      .split("\n")
                      .map((item, i) => <P key={i}>{item}</P>)}
                  </div>
                ))}
              </div>

              <P>
                <i>{project.tech.join(", ")}</i>
              </P>
            </Content>
            <ButtonSpacer>
              {prev_project && (
                <Prev
                  onClick={() => history.push(`/project/${prev_index}`)}
                >{`<- ${prev_project.short_name}`}</Prev>
              )}

              {next_project && (
                <Next
                  onClick={() => history.push(`/project/${next_index}`)}
                >{`${next_project.short_name} ->`}</Next>
              )}
            </ButtonSpacer>
          </Wrapper>
        )}
      />
    );
  }
}

export default ProjectDetail;
