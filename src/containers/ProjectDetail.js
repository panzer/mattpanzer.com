import React from "react";
import { Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { H2, H4, P, A, ALink, MediaQueries } from "../style";
import { HashLink } from "react-router-hash-link";

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

const Prev = styled(ALink)`
  grid-area: prev;
  text-align: left;
`;

const Next = styled(ALink)`
  grid-area: next;
  text-align: right;
`;

function ProjectDetail() {
  window.scrollTo(0, 0);
  const { i } = useParams();
  const project_index = !isNaN(parseInt(i))
    ? parseInt(i)
    : content.projects.findIndex(({ uid }) => uid === i);
  const project = content.projects[project_index];
  const len = content.projects.length;
  const prev_index = project_index - 1;
  const prev_project = prev_index >= 0 ? content.projects[prev_index] : null;
  const prev_slug = prev_project ? prev_project.uid : null;
  const next_index = project_index + 1;
  const next_project = next_index < len ? content.projects[next_index] : null;
  const next_slug = next_project ? next_project.uid : null;
  const url = project.url.replace("https://", "");
  const substring = url.indexOf("/") !== -1 ? url.indexOf("/") : url.length;
  const imgIndex = project.media.length > 1 ? 1 : 0;
  const datesText =
    project.start_date !== project.end_date
      ? `${project.start_date} -> ${project.end_date}`
      : project.end_date;
  return (
    <Wrapper bg_color={project.color} txt_color={project.text_color}>
      <Content>
        <ALink to={"/#projects"}>{`<- Back to my projects`}</ALink>
        <H2>{project.name}</H2>

        <P>
          {datesText}
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
              {section.text.split("\n").map((item, i) => (
                <P key={i}>{item}</P>
              ))}
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
            to={`/project/${prev_slug}`}
          >{`<- ${prev_project.short_name}`}</Prev>
        )}

        {next_project && (
          <Next
            to={`/project/${next_slug}`}
          >{`${next_project.short_name} ->`}</Next>
        )}
      </ButtonSpacer>
    </Wrapper>
  );
}

export default ProjectDetail;
