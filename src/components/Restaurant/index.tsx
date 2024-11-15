import Button from '../Button'
import {
  InfoRestaurant,
  Card,
  Description,
  NameAndRate,
  Rating,
  Categorys
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  title: string
  categorys: string[]
  description: string
  image: string
  rate: string
}

const Restaurant = ({ categorys, description, image, title, rate }: Props) => (
  <Card>
    <img src={image} alt="title" />
    <Categorys>
      {categorys.map((catagory) => (
        <Tag key={catagory}>{catagory}</Tag>
      ))}
    </Categorys>
    <InfoRestaurant>
      <NameAndRate>
        <h3>{title}</h3>
        <Rating>
          <p>{rate}</p>
          <img src={estrela} alt="estrela" />
        </Rating>
      </NameAndRate>
      <Description>{description}</Description>
      <Button
        type="link"
        to="/restaurante1"
        title="Ir para a página do restaurante 1"
      >
        Saiba mais
      </Button>
    </InfoRestaurant>
  </Card>
)

export default Restaurant
