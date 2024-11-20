import { Card, Description, Title } from './styles'

import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
}

const Food = ({ description, image, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button type="button" title="Adicionar o produto o carrinho">
      Adicionar ao Carrinho
    </Button>
  </Card>
)

export default Food
