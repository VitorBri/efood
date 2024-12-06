import { List, FoodsContainer, Modal, ModalContent } from './styles'
import Food from '../Food'

import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'

export type FoodItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  foods: FoodItem[]
}

const FoodsList = ({ foods }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [foodSelecionado, setFoodSeleciondo] = useState<FoodItem>()

  const formatPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <FoodsContainer>
        <div className="container">
          <List>
            {foods.map((food) => (
              <li key={food.id}>
                <Food
                  title={food.nome}
                  image={food.foto}
                  description={food.descricao}
                  type="primary"
                  modalEstaAberto={modalEstaAberto}
                  setModalEstaAberto={() => {
                    setModalEstaAberto(true)
                    setFoodSeleciondo(food)
                  }}
                />
              </li>
            ))}
          </List>
        </div>
      </FoodsContainer>
      <Modal className={modalEstaAberto ? 'visible' : ''}>
        <div
          onClick={() => setModalEstaAberto(false)}
          className="overlay"
        ></div>
        <ModalContent className="container">
          <img
            src={fechar}
            alt="icone de fechar"
            onClick={() => setModalEstaAberto(false)}
          />
          {foodSelecionado && (
            <Food
              type="secundary"
              description={foodSelecionado.descricao}
              image={foodSelecionado.foto}
              title={foodSelecionado.nome}
              portion={`Serve ${foodSelecionado.porcao}`}
              price={formatPreco(foodSelecionado.preco)}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default FoodsList
