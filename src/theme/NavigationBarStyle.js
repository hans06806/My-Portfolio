import styled from 'styled-components';
import { blue, purple } from './PageStyle';

export const NavigationContainer = styled.div`
    width: 100%;
    position: fixed;
    padding-right: 0px;
    background-color: write;
`;

export const NavItem = styled.div`
  cursor: pointer;
  color: ${ blue };
  position: relative;

  &:hover {
    color: red;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: yellow;
      z-index: -1;
      transform: scale(1.3, 1.5);
    }
  }
`;
