import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { List, FoodsContainer, Modal, ModalContent } from './styles'
import Food from '../Food'
import { close, open } from '../../store/reducers/modal'

import fechar from '../../assets/images/close 1.png'

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

export const formatPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const FoodsList = ({ foods }: Props) => {
  const { isOpenModal, selectedFood } = useSelector(
    (state: RootReducer) => state.modal
  )

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(close())
  }
  const openModal = (food: FoodItem) => {
    dispatch(open(food))
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
                  onClick={() => openModal(food)}
                />
              </li>
            ))}
          </List>
        </div>
      </FoodsContainer>
      <Modal className={isOpenModal ? 'visible' : ''}>
        <div onClick={closeModal} className="overlay"></div>
        <ModalContent className="container">
          <img src={fechar} alt="icone de fechar" onClick={closeModal} />
          {selectedFood && (
            <Food
              id={selectedFood.id}
              type="secundary"
              description={selectedFood.descricao}
              image={selectedFood.foto}
              title={selectedFood.nome}
              portion={`Serve ${selectedFood.porcao}`}
              price={selectedFood.preco}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default FoodsList
