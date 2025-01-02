import { useDispatch } from 'react-redux'

import Button from '../Button'

import { add, open } from '../../store/reducers/cart'
import { close } from '../../store/reducers/modal'
import { parseToBrl } from '../../utils'

import * as S from './styles'

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
    dispatch(close())
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
      <S.Card
        id={id}
        type={type}
        title={title}
        description={description}
        image={image}
      >
        <img src={image} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Description>{getDescricao(description)}</S.Description>
        <Button onClick={onClick} type="button" title="Saber mais detalhes">
          Mais detalhes
        </Button>
      </S.Card>
    )
  }
  return (
    <S.Card
      id={id}
      type={type}
      title={title}
      description={description}
      image={image}
    >
      <img src={image} alt={title} />
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>
          {description}
          <span> {portion}</span>
        </S.Description>
        <Button
          onClick={() => {
            closeModal(), addToCart()
          }}
          type="button"
          title="Adicionar o produto o carrinho"
        >
          {`Adicionar ao Carrinho - ${parseToBrl(price)}`}
        </Button>
      </div>
    </S.Card>
  )
}

export default Food
