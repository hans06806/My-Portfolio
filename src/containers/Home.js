import React, { Component, PropTypes } from 'react';
import { Container, Relative} from '../theme/grid';
import {
  Background,
  Image,
  RevealP
} from '../theme/HomeStyle';


export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <Background>
          <h2>Hansi Wang</h2>
          <h3>Front-end Developer - Aim to DevOps Engineer</h3>
        </Background>
      </Container>
    );
  }
}
