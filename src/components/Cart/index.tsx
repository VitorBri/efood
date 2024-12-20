import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Button from '../Button'
import { close, remove } from '../../store/reducers/cart'

import { CartContainer, Overlay, Sidebar, CartItem } from './styles'
import { formatPreco } from '../FoodsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.price)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <br />
                <span>{formatPreco(item.price)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <div>
          <p>Valor total</p>
          <p>{formatPreco(getTotalPrice())}</p>
        </div>
        <Button title="Clique aqui para ir a entrega" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
