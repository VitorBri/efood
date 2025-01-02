import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import imgFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/EFood.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.FundoHeader style={{ backgroundImage: `url(${imgFundo})` }}>
      <div className="container">
        <S.HeaderContainer>
          <S.Link
            title="Clique aqui para voltar a pagona de restaurantes"
            href="/"
          >
            Restaurantes
          </S.Link>
          <h1>
            <img src={logo} alt="Efood" />
          </h1>
          <p role="button" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </p>
        </S.HeaderContainer>
      </div>
    </S.FundoHeader>
  )
}

export default Header
