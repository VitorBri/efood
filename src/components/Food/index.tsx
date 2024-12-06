import { Card, Description, Title } from './styles'

import Button from '../Button'

export type Props = {
  type: 'primary' | 'secundary'
  title: string
  description: string
  image: string
  portion?: string
  price?: string
  modalEstaAberto?: boolean
  setModalEstaAberto?: React.Dispatch<React.SetStateAction<boolean>>
}

const Food = ({
  description,
  image,
  title,
  type,
  portion,
  price,
  setModalEstaAberto
}: Props) => {
  const handleButtonClick = () => {
    if (setModalEstaAberto) {
      setModalEstaAberto(true)
    }
  }

  const getDescricao = (description: string) => {
    if (description.length > 125) {
      return description.slice(0, 122) + '...'
    }

    return description
  }

  if (type === 'primary') {
    return (
      <Card type={type} title={title} description={description} image={image}>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{getDescricao(description)}</Description>
        <Button
          onClick={handleButtonClick}
          type="button"
          title="Saber mais detalhes"
        >
          Mais detalhes
        </Button>
      </Card>
    )
  }
  return (
    <Card type={type} title={title} description={description} image={image}>
      <img src={image} alt={title} />
      <div>
        <Title>{title}</Title>
        <Description>
          {description}
          <span> {portion}</span>
        </Description>
        <Button type="button" title="Adicionar o produto o carrinho">
          {`Adicionar ao Carrinho - ${price}`}
        </Button>
      </div>
    </Card>
  )
}

export default Food
