import { FundoHeader, HeaderContainer, Link } from './styles'

import imgFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/EFood.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <FundoHeader style={{ backgroundImage: `url(${imgFundo})` }}>
      <div className="container">
        <HeaderContainer>
          <Link href="/">Restaurantes</Link>
          <img src={logo} alt="logo" />
          <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
        </HeaderContainer>
      </div>
    </FundoHeader>
  )
}

export default Header
