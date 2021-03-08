import styled from 'styled-components';

export const Body = styled.div`
  background: ${(props) => props.bgcolor};
  height: 100%;
  padding: 0 16%;
  @media screen and (max-width: 720px) {
    padding: 0 10%;
  }
`;
