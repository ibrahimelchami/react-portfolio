import { Card, Title, Content, Image, ImageContainer } from './CardHome';
import PrimaryButton from '../../Button';

const CardHome = ({ title, content, image }) => {
  return (
    <Card>
      <div>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <PrimaryButton>Go to page &gt;</PrimaryButton>
      </div>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
    </Card>
  );
};

export default CardHome;

// export default function CardHome(props) {
//   return (
//     <Card>
//       <Title>{title}</Title>
//       <Content>{content}</Content>
//       <Image src={image}></Image>
//     </Card>
//   );
// }
