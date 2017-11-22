import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Flexbox from 'flexbox-react';
import { Background } from '../theme/AppStyle';

class App extends Component {
  render() {
    return (
        <Flexbox flexDirection="column" minHeight="100vh">
          <Flexbox element="header" height="60px">
            <NavigationBar/>
          </Flexbox>

          <Flexbox element="section" flexGrow={1}>
          <Background>
              {this.props.children}
          </Background>
          </Flexbox>

          <Flexbox element="section" flexGrow={2}>
            content
          </Flexbox>
          <Flexbox element="footer" height="60px">
            Footer
          </Flexbox>
        </Flexbox>
    );
  }
}

export default App;
