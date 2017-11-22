import styled from 'styled-components';
import css from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vw;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: center;
  color: white;

  h2 {
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    transform-origin: left;
    transform: rotateY(90deg);

    transition: transform 3s;
  }

  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
