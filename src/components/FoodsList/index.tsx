import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Food from '../Food'

import { close, open } from '../../store/reducers/modal'

import closeIcon from '../../assets/images/close 1.png'

import * as S from './styles'

type Props = {
  foods: FoodItem[]
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
      <S.FoodsContainer>
        <div className="container">
          <S.List>
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
          </S.List>
        </div>
      </S.FoodsContainer>
      <S.Modal className={isOpenModal ? 'visible' : ''}>
        <div onClick={closeModal} className="overlay"></div>
        <S.ModalContent className="container">
          <img src={closeIcon} alt="icone de fechar" onClick={closeModal} />
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
        </S.ModalContent>
      </S.Modal>
    </>
  )
}

export default FoodsList
