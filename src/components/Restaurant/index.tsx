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
  to: string
}

export const primeiraLetraEmMaiusculo = (text: string): string => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

const Restaurant = ({
  categorys,
  description,
  image,
  title,
  rate,
  to
}: Props) => {
  return (
    <Card>
      <img src={image} alt="title" />
      <Categorys>
        {categorys.map((catagory) => (
          <Tag key={primeiraLetraEmMaiusculo(catagory)}>
            {primeiraLetraEmMaiusculo(catagory)}
          </Tag>
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
        <Button type="link" to={to} title="Ir para a página do restaurante">
          Saiba mais
        </Button>
      </InfoRestaurant>
    </Card>
  )
}

export default Restaurant
