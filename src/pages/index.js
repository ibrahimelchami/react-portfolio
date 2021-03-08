import React from 'react';

import Data from '../Data';

import {
  Content,
  NavCard,
  PgH,
  PgSH,
  CContainer,
  HContainer,
} from '../components/ComponentLibrary';
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
    <Content pagecolor={'#FCF7DE'}>
      <HContainer>
        <PgH>
          Hey there &#x1F44B;<br></br>I'm Ibrahim
        </PgH>
        <PgSH>&#x270F;&#xFE0F; Product Designer</PgSH>
        <PgSH>&#x1F468;&#x1F3FB;&#x200D;&#x1F4BB; Hobby Coder</PgSH>
        <PgSH>&#x1F3AE; Gamer</PgSH>
      </HContainer>
      <CContainer>
        <NavCard
          title={Data.risepeople.title}
          content={Data.risepeople.content}
          image={risepeopleimg}
          label={Data.risepeople.label}
          count={Data.risepeople.count}
          btntxt={'WIP'}
          link={'/rise-people'}
        ></NavCard>
        <NavCard
          title={Data.theinside.title}
          content={Data.theinside.content}
          image={risepeopleimg}
          label={Data.theinside.label}
          count={Data.theinside.count}
          btntxt={'Check it out'}
          link={'/the-inside'}
        ></NavCard>
        <NavCard
          title={Data.vanmates.title}
          content={Data.vanmates.content}
          image={risepeopleimg}
          label={Data.vanmates.label}
          count={Data.vanmates.count}
          btntxt={'Check it out'}
          link={'/vanmates'}
        ></NavCard>
      </CContainer>
    </Content>
  );
};

export default Home;
