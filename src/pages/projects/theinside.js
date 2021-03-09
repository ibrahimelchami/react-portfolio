import React from 'react';

import Data from '../../Data';

import designchallenge from '../../Data/Assets/inside-old.png';

import {
  Content,
  PgH,
  PgSH,
  CContainer,
  HContainer,
  Image,
  PrimaryButton,
  P1,
  SectionH,
  ParagraphH,
  List,
  Quote,
  Navbar,
} from '../../components/ComponentLibrary';

const TheInside = () => {
  return (
    <div>
      <Navbar />
      <div style={{ background: '#f0e4d7' }}>
        <HContainer>
          <div>
            <PgH>{Data.theinside.title}</PgH>
            <PgSH>{Data.theinside.subheading[1]}</PgSH>
          </div>
        </HContainer>
      </div>

      <Content bgcolor={'#FFF9F1'}>
        <Quote bgcolor={'#f0e4d7'}>
          <ParagraphH>{Data.theinside.heading[1]}</ParagraphH>
          <P1>{Data.theinside.paragraph[1]}</P1>
        </Quote>

        <ParagraphH>{Data.theinside.heading[2]}</ParagraphH>
        <P1>{Data.theinside.paragraph[2]}</P1>
        <Image image={designchallenge}></Image>
        <P1>{Data.theinside.paragraph[3]}</P1>
        <List>
          <ul>
            <li>
              <b>{Data.theinside.paragraph[4].substr(0, 45)}</b>
              {Data.theinside.paragraph[4].substr(45)}
            </li>
            <li>
              <b>{Data.theinside.paragraph[5].substr(0, 25)}</b>
              {Data.theinside.paragraph[5].substr(25)}
            </li>
            <li>
              <b>{Data.theinside.paragraph[6].substr(0, 28)}</b>
              {Data.theinside.paragraph[6].substr(28)}
            </li>
            <li>
              <b>{Data.theinside.paragraph[7].substr(0, 45)}</b>
              {Data.theinside.paragraph[7].substr(45)}
            </li>
            <li>
              <b>{Data.theinside.paragraph[8].substr(0, 23)}</b>
              {Data.theinside.paragraph[8].substr(23)}
            </li>
          </ul>
        </List>

        <ParagraphH>{Data.theinside.heading[3]}</ParagraphH>
        <Image image={designchallenge}></Image>
        <P1>{Data.theinside.paragraph[9]}</P1>

        <ParagraphH>{Data.theinside.heading[4]}</ParagraphH>
        <Image image={designchallenge}></Image>
        <P1>{Data.theinside.paragraph[10]}</P1>

        <SectionH>{Data.theinside.heading[5]}</SectionH>
        <P1>{Data.theinside.paragraph[11]}</P1>
        <Quote bgcolor={'#f0e4d7'}>
          <P1>{Data.theinside.paragraph[12]}</P1>
        </Quote>
        <P1>{Data.theinside.paragraph[13]}</P1>
      </Content>
    </div>
  );
};

export default TheInside;
