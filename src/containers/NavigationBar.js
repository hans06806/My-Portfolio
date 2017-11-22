import React, { Component } from 'react';
import { NavigationContainer, NavItem } from '../theme/NavigationBarStyle';
import { Link } from 'react-router';
import Flexbox from 'flexbox-react';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <Flexbox Elements="nav" FlexDisplays="flex inline-flex">
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/Projects">My Project</Link></NavItem>
          <NavItem><Link to="/About">About Me</Link></NavItem>
          <NavItem><Link to="/Contact">Contact Me</Link></NavItem>
        </Flexbox>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;
