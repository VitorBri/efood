import { FundoHero, Title } from './styles'

import imgFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <FundoHero style={{ backgroundImage: `url(${imgFundo})` }}>
    <img src={logo} alt="logo" />
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </FundoHero>
)

export default Hero
