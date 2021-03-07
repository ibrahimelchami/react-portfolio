import React, { useState, useEffect } from 'react';

import Data from '../Data';
import { Link } from 'react-router-dom';

import { CardHome, NavBar } from '../components/ComponentLibrary';

const Home = () => {
  //   const BasicEffect = () => {
  //     const [age, setAge] = useState(0);
  //     const handleClick = () => setAge(age + 1);

  //     useEffect(() => {
  //       document.CardHome.title = age;
  //     });
  //   };

  return (
    <div>
      <h1 className="heading">
        Hey there &#x1F44B;<br></br>I'm Ibrahim
      </h1>
      <h2 className="sub-heading">&#x270F;&#xFE0F; Product Designer</h2>
      <h2 className="sub-heading">
        &#x1F468;&#x1F3FB;&#x200D;&#x1F4BB; Hobby Coder
      </h2>
      <h2 className="sub-heading">&#x1F3AE; Gamer</h2>
      <div style={{ marginTop: '300px' }}>
        <CardHome
          title={Data.theinside.title}
          content={Data.theinside.content}
          image={Data.theinside.image}
        ></CardHome>
      </div>
    </div>
  );
};

export default Home;
