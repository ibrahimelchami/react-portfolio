import Navbar from '../../SimpleNav';

import {
  Card,
  Title,
  Content,
  Image,
  ImageContainer,
  Label,
  Count,
  Columnize,
  ButtonHolder,
} from './NavCard';
import PrimaryButton from '../../Button';
import { NavLink as Link } from 'react-router-dom';

const NavCard = ({
  title,
  content,
  image,
  label,
  count,
  btntxt,
  link,
  btnstate,
}) => {
  return (
    <Card>
      <Columnize>
        <Count>{count}</Count>
        <ImageContainer>
          <Image src={image}></Image>
        </ImageContainer>
      </Columnize>
      <div>
        <Label>{label}</Label>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <ButtonHolder>
          <Link to={link}>
            <PrimaryButton btnstate={btnstate}>{btntxt}</PrimaryButton>
          </Link>
        </ButtonHolder>
        {/* <PrimaryButton>Go to page &gt;</PrimaryButton> */}
      </div>
    </Card>
  );
};

export default NavCard;

// export default function CardHome(props) {
//   return (
//     <Card>
//       <Title>{title}</Title>
//       <Content>{content}</Content>
//       <Image src={image}></Image>
//     </Card>
//   );
// }
