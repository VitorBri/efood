import { List, FoodsContainer, Modal, ModalContent } from './styles'
import Food from '../Food'

import FoodOption from '../../models/Foods'

import pizza from '../../assets/images/pizza.png'
import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'

export type Props = {
  foods: FoodOption[]
}

const FoodsList = ({ foods }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <FoodsContainer>
        <div className="container">
          <List>
            {foods.map((food) => (
              <Food
                key={food.id}
                title={food.title}
                image={food.image}
                description={food.description}
                type="primary"
                modalEstaAberto={modalEstaAberto}
                setModalEstaAberto={setModalEstaAberto}
              />
            ))}
          </List>
        </div>
      </FoodsContainer>
      <Modal className={modalEstaAberto ? 'visible' : ''}>
        <div className="overlay"></div>
        <ModalContent className="container">
          <img
            src={fechar}
            alt="icone de fechar"
            onClick={() => setModalEstaAberto(false)}
          />
          <Food
            type="secundary"
            description="A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião."
            image={pizza}
            title="Pizza Calabreza"
            portion="Serve 2 a 4 pessoas"
            price="60,00"
          />
        </ModalContent>
      </Modal>
    </>
  )
}

export default FoodsList
