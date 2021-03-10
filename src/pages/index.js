import React from 'react';

import Data from '../Data';

import {
  Content,
  NavCard,
  SiteH,
  SiteSH,
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
    <div style={{ background: '#FFFEF9' }}>
      <HContainer>
        <div>
          <SiteH>
            Hey there &#x1F44B;<br></br>I'm Ibrahim
          </SiteH>
          <SiteSH style={{ fontWeight: '600' }}>
            &#x270F;&#xFE0F; Product Designer
          </SiteSH>
          <SiteSH style={{ fontWeight: '600' }}>
            &#x1F468;&#x1F3FB;&#x200D;&#x1F4BB; Hobby Coder
          </SiteSH>
          <SiteSH style={{ fontWeight: '600' }}>&#x1F3AE; Gamer</SiteSH>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'grey',
              textAlign: 'center',
              fontSize: '16px',
            }}
          >
            ( This portfolio was built with&nbsp;
            <span
              style={{
                fontSize: '32px',
                lineHeight: '16px',
              }}
            >
              &#x269b;
            </span>
            React )
          </p>
        </div>
      </HContainer>
      {/* <Content bgcolor={'#FCF7DE'}> */}
      <CContainer bgcolor={'#FCF7DE'}>
        <NavCard
          title={Data.theinside.title}
          content={Data.theinside.summary}
          image={risepeopleimg}
          label={Data.theinside.label}
          count={Data.theinside.count}
          btntxt={'Check it out >'}
          btnstate={'active'}
          link={'/the-inside'}
        ></NavCard>
        <NavCard
          title={Data.risepeople.title}
          content={Data.risepeople.summary}
          image={risepeopleimg}
          label={Data.risepeople.label}
          count={Data.risepeople.count}
          btntxt={'Under Construction'}
          btnstate={0}
          link={''}
        ></NavCard>
        <NavCard
          title={Data.vanmates.title}
          content={Data.vanmates.summary}
          image={risepeopleimg}
          label={Data.vanmates.label}
          count={Data.vanmates.count}
          btntxt={'Under Construction'}
          btnstate={0}
          link={''}
        ></NavCard>
      </CContainer>
      {/* </Content> */}
    </div>
  );
};

export default Home;
