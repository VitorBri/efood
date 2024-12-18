import Button from '../Button'
import { CartContainer, Overlay, Sidebar, CartItem } from './styles'

import img from '../../assets/images/sushi.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={img} alt="" />
          <div>
            <h3>Nome do prato</h3>
            <br />
            <span>R$ 160,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={img} alt="" />
          <div>
            <h3>Nome do prato</h3>
            <br />
            <span>R$ 160,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <div>
        <p>Valor total</p>
        <p>R$ 180,00 </p>
      </div>
      <Button title="Clique aqui para ir a entrega" type="button">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
