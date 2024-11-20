import { FundoHeader, HeaderContainer, Link } from './styles'

import imgFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/EFood.svg'

const Header = () => (
  <FundoHeader style={{ backgroundImage: `url(${imgFundo})` }}>
    <div className="container">
      <HeaderContainer>
        <Link href="/">Restaurantes</Link>
        <img src={logo} alt="logo" />
        <p>0 produto(s) no carrinho</p>
      </HeaderContainer>
    </div>
  </FundoHeader>
)

export default Header
