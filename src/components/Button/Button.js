import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 700;
  color: white;
  padding: 8px 16px;
  height: 44px;
  background-color: ${(props) => props.btncolor};
  border: none;
  border-radius: 8px;

  box-shadow: 0;
  transition: box-shadow 500ms;

  &:hover {
    cursor: ${(props) => props.cursor};
    background-color: ${(props) => props.hvrcolor};
    box-shadow: ${(props) => props.hvrshadow};

    -webkit-transition: 1000ms linear;
    -ms-transition: 100ms linear;
    transition: 100ms linear;
  }

  &:focus {
    outline: none;
  }
`;
