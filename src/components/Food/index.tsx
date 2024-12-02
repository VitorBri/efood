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
  if (type === 'primary') {
    return (
      <Card type={type} title={title} description={description} image={image}>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          onClick={handleButtonClick}
          type="button"
          title="Adicionar o produto o carrinho"
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
          <br />
          <br />
          {portion}
        </Description>
        <Button type="button" title="Adicionar o produto o carrinho">
          {`Adicionar ao Carrinho - R$ ${price}`}
        </Button>
      </div>
    </Card>
  )
}

export default Food
