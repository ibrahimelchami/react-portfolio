import styled from 'styled-components';

export const Body = styled.div`
  /* padding-top: 25vh; */
  background: ${(props) => props.bgcolor};
  height: 100%;
  padding: 0 16%;
  @media screen and (max-width: 720px) {
    /* width: 100%; */
    padding: 0 10%;
  }
`;
