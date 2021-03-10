import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;

  @media screen and (max-width: 900px) {
    padding: 0 5vw;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-family: 'Source Serif Pro Black';
  font-size: 28px;
  line-height: 36px;
  margin: 8px 0 0 0;
`;

export const Label = styled.h3`
  font-family: 'Source Serif Pro Light';
  font-size: 20px;
  line-height: 24px;
  margin: 8px 0 0 0;
`;

export const Content = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 24px 0;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: unset;
  }
`;

export const Columnize = styled.div`
  display: flex;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Count = styled.p`
  font-family: 'Source Serif Pro Regular';
  font-size: 28px;
  line-height: 36px;
  margin: 8px 0 8px 0;
`;

export const ImageContainer = styled.div`
  width: 30vw;
  max-width: 400px;
  padding: 0 24px 0 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: unset;
    padding: 0 0 16px 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 16px;
`;

export const ButtonHolder = styled.div`
  @media screen and (max-width: 600px) {
  }
`;
