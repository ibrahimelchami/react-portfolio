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

  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  padding: 24px 0 0 32px;

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 64px;
    background-color: #fffdf9;
    border-bottom: 3px solid #222;
  }
`;
