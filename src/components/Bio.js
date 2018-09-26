import React, { Component } from "react";
import { H1, P, A, FullScreenSection } from "../style";

const Item = P.extend`
  padding-left: 4ch;
  text-indent: -4ch;
`;

const Wrapper = FullScreenSection.extend`
  background-color: white;
`;

class Bio extends Component {
  render() {
    const content = this.props.content;
    const bd = new Date(content.dob.string);
    const age = ((Date.now() - bd) / (1000 * 60 * 60 * 24 * 365.24)).toFixed(8);
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
          <b>currently in: </b>
          {content.location}
        </Item>
        <Item>
          <b>occupation: </b>
          {content.occupation}
        </Item>
        <Item>
          <b>education: </b>
          {content.education.map(e => e.name).pop()}
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

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Bio;
