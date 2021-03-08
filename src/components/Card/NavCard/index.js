import {
  Card,
  Title,
  Content,
  Image,
  ImageContainer,
  Label,
  Count,
  Columnize,
} from './NavCard';
import PrimaryButton from '../../Button';

const NavCard = ({ title, content, image, label, count, btntxt }) => {
  return (
    <Card>
      <Columnize>
        <Count>{count}</Count>
        <ImageContainer>
          <Image src={image}></Image>
        </ImageContainer>
      </Columnize>
      <div style={{ position: 'relative' }}>
        <Label>{label}</Label>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <div style={{ position: 'absolute', bottom: '16px' }}>
          <PrimaryButton>{btntxt}</PrimaryButton>
        </div>
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
