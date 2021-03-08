import styled from 'styled-components';
// import { FaBars } from 'react-icons/fa';

export const Background = styled.div`
  z-index: 1;
  position: absolute;
  height: 100px;
  width: 200px;

  background-color: #def3fd;
`;

export const Body = styled.div`
  position: absolute;
  right: 0;
  padding: 200px 0 0 0;

  width: 75%;

  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 200px 0;

    position: unset;
  }
`;
