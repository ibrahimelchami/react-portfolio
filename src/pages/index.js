import React, { useState, useEffect } from 'react';

import Data from '../Data';
import { Link } from 'react-router-dom';

import { NavCard } from '../components/ComponentLibrary';
import { CardContainer, Content, Heading, SubHeading } from './indexElements';
import risepeopleimg from '../Data/Assets/sample.png';

const Home = () => {
  //   const BasicEffect = () => {
  //     const [age, setAge] = useState(0);
  //     const handleClick = () => setAge(age + 1);

  //     useEffect(() => {
  //       document.CardHome.title = age;
  //     });
  //   };

  return (
    <Content>
      <Heading className="heading">
        Hey there &#x1F44B;<br></br>I'm Ibrahim
      </Heading>
      <SubHeading className="sub-heading">
        &#x270F;&#xFE0F; Product Designer
      </SubHeading>
      <SubHeading className="sub-heading">
        &#x1F468;&#x1F3FB;&#x200D;&#x1F4BB; Hobby Coder
      </SubHeading>
      <SubHeading>&#x1F3AE; Gamer</SubHeading>
      <CardContainer>
        <NavCard
          title={Data.risepeople.title}
          content={Data.risepeople.content}
          image={risepeopleimg}
          label={Data.risepeople.label}
          count={Data.risepeople.count}
          btntxt={'WIP'}
        ></NavCard>
        <NavCard
          title={Data.theinside.title}
          content={Data.theinside.content}
          image={risepeopleimg}
          label={Data.theinside.label}
          count={Data.theinside.count}
          btntxt={'Check it out'}
        ></NavCard>
        <NavCard
          title={Data.vanmates.title}
          content={Data.vanmates.content}
          image={risepeopleimg}
          label={Data.vanmates.label}
          count={Data.vanmates.count}
          btntxt={'Check it out'}
        ></NavCard>
      </CardContainer>
    </Content>
  );
};

export default Home;
