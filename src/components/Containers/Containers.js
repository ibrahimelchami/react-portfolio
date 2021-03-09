import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 60vw;
  margin: auto;
  @media screen and (max-width: 900px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

export const ContentContainer = styled.div`
  background: ${(props) => props.backgroundcolor};
  height: 100%;
  padding: 80px 20vw;
  @media screen and (max-width: 900px) {
    padding: 80px 10vw;
  }
  @media screen and (max-width: 600px) {
    padding: 80px 5vw;
  }
`;

export const HeadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  padding: 24px 56px;
  margin: 0 16px 32px 16px;
  background-color: #222;
  border-radius: 2px;
`;

export const ImageStyling = styled.img`
  width: 100%;
`;

export const QuoteStyling = styled.div`
  background: ${(props) => props.backgroundcolor};
  margin: 0 0 32px 0;
  padding: 32px;
  border-radius: 2px;
  p {
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
`;
