import React, { Component } from "react";
import { H1, H2, H3, P, A, FullScreenSection, MediaQueries } from "../style";
import styled from "styled-components";

const Item = P.extend`
  padding-left: 4ch;
  text-indent: -4ch;
`;

const Wrapper = FullScreenSection.extend``;

class Bio extends Component {
  render() {
    const content = this.props.content;
    const bd = new Date(content.dob.string);
    const age = Math.floor((Date.now() - bd) / (1000 * 60 * 60 * 24 * 365.2));
    return (
      <Wrapper id="about">
        <H1>the basics</H1>
        <Item>
          <b>age: </b>
          {age} years
        </Item>
        <Item>
          <b>height: </b>
          {content.height}
        </Item>
        <Item>
          <b>hometown: </b>
          {content.hometown}
        </Item>
        <Item>
          <b>occupation: </b>
          {content.occupation}
        </Item>
        <Item>
          <b>interests: </b>
          {content.interests.join(", ")}
        </Item>
        <Item>
          <b>skills: </b>
          {content.skills.join(", ")}
        </Item>
        <Item>
          <b>links: </b>
          {content.links.map(({ title, url }, i) => (
            <span key={i}>
              <A href={url} target="_blank">
                {title}
              </A>{" "}
            </span>
          ))}
        </Item>
      </Wrapper>
    );
  }
}

export default Bio;
