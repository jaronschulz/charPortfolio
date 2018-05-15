import React, { Component } from 'react';
import styled from 'styled-components';
import AboutContact from './AboutContact/AboutContact';
import AboutMe from './AboutMe/AboutMe';


export default class About extends Component {
  render() {
    return (
      <Wrapper>
        <AboutMe />
        <AboutContact />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  font-size: 30px;
  text-align: center;
  color: palevioletred;
`;
