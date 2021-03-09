import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

export const Nav = styled(Link)`
  font-family: 'Source Serif Pro';
  font-weight: bold;
  font-style: italic;
  font-size: 56px;
  text-align: left;
  text-decoration: none;
  color: ${(props) => props.linkcolor};
  position: absolute;

  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  padding: 24px 0 0 32px;

  @media screen and (max-width: 600px) {
    font-size: 40px;
    padding: 16px 0 0 24px;
  }
`;
