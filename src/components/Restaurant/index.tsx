import Button from '../Button'
import Tag from '../Tag'

import { lowercaseLetter } from '../../utils'

import starIcon from '../../assets/images/estrela.svg'

import * as S from './styles'

type Props = {
  title: string
  categorys: string[]
  description: string
  image: string
  rate: string
  to: string
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
    <S.Card>
      <img src={image} alt="title" />
      <S.Categorys>
        {categorys.map((catagory) => (
          <Tag key={lowercaseLetter(catagory)}>{lowercaseLetter(catagory)}</Tag>
        ))}
      </S.Categorys>
      <S.InfoRestaurant>
        <S.NameAndRate>
          <h3>{title}</h3>
          <S.Rating>
            <p>{rate}</p>
            <img src={starIcon} alt="estrela" />
          </S.Rating>
        </S.NameAndRate>
        <S.Description>{description}</S.Description>
        <Button type="link" to={to} title="Ir para a página do restaurante">
          Saiba mais
        </Button>
      </S.InfoRestaurant>
    </S.Card>
  )
}

export default Restaurant
