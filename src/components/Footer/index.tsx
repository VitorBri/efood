import { Container, SocialMidias } from './styles'

import logo from '../../assets/images/EFood.svg'
import imgInstagram from '../../assets/images/instagram-logo.svg'
import imgFacebook from '../../assets/images/facebook-logo.svg'
import imgTwitter from '../../assets/images/twitter-logo.svg'

const Footer = () => (
  <Container>
    <img src={logo} alt="EFood" />
    <SocialMidias>
      <li>
        <a href="#">
          <img src={imgInstagram} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={imgFacebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={imgTwitter} alt="twitter" />
        </a>
      </li>
    </SocialMidias>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
