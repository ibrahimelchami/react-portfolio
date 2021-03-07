import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  z-index: 10;

  @media screen and (max-width: 720px) {
    z-index: 999;
    flex-direction: row;
    justify-content: space-between;

    font-weight: bold;

    width: 100%;
    height: 64px;
    background-color: #fffdf9;
    border-bottom: 3px solid #222;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 15px 0;
  cursor: pointer;
  color: #222;

  &:hover {
    background-color: #222;
    color: white;
  }

  &.active {
    background-color: #222;
    color: white;
  }

  @media screen and (max-width: 720px) {
    align-items: center;
    justify-content: center;

    font-size: 24px;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;
