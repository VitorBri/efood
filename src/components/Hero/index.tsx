import imgFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/EFood.svg'

import * as S from './styles'

const Hero = () => (
  <S.FundoHero style={{ backgroundImage: `url(${imgFundo})` }}>
    <img src={logo} alt="logo" />
    <S.Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </S.Title>
  </S.FundoHero>
)

export default Hero
