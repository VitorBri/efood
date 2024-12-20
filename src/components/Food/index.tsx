import { Card, Description, Title } from './styles'

import Button from '../Button'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { close as closeM, open as openM } from '../../store/reducers/modal'
import { formatPreco } from '../FoodsList'

export type Props = {
  type: 'primary' | 'secundary'
  title: string
  description: string
  image: string
  portion?: string
  price?: number
  id?: number
  onClick?: () => void
}

const Food = ({
  description,
  image,
  title,
  type,
  portion,
  price,
  id,
  onClick
}: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 125) {
      return description.slice(0, 122) + '...'
    }

    return description
  }

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(closeM())
  }

  const addToCart = () => {
    dispatch(
      add({
        title,
        image,
        price,
        id
      })
    )
    dispatch(open())
  }

  if (type === 'primary') {
    return (
      <Card
        id={id}
        type={type}
        title={title}
        description={description}
        image={image}
      >
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{getDescricao(description)}</Description>
        <Button onClick={onClick} type="button" title="Saber mais detalhes">
          Mais detalhes
        </Button>
      </Card>
    )
  }
  return (
    <Card
      id={id}
      type={type}
      title={title}
      description={description}
      image={image}
    >
      <img src={image} alt={title} />
      <div>
        <Title>{title}</Title>
        <Description>
          {description}
          <span> {portion}</span>
        </Description>
        <Button
          onClick={() => {
            closeModal(), addToCart()
          }}
          type="button"
          title="Adicionar o produto o carrinho"
        >
          {`Adicionar ao Carrinho - ${formatPreco(price)}`}
        </Button>
      </div>
    </Card>
  )
}

export default Food
