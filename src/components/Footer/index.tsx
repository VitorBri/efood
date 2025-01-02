import logo from '../../assets/images/EFood.svg'
import imgInstagram from '../../assets/images/instagram-logo.svg'
import imgFacebook from '../../assets/images/facebook-logo.svg'
import imgTwitter from '../../assets/images/twitter-logo.svg'

import * as S from './styles'

const Footer = () => (
  <S.Container>
    <h1>
      <img src={logo} alt="EFood" />
    </h1>
    <S.SocialMidias>
      <li>
        <a title="Clique aqui para acessar nossa rede do instagram" href="#">
          <img src={imgInstagram} alt="instagram" />
        </a>
      </li>
      <li>
        <a title="Clique aqui para acessar nossa rede do facebook" href="#">
          <img src={imgFacebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a title="Clique aqui para acessar nossa rede do twitter" href="#">
          <img src={imgTwitter} alt="twitter" />
        </a>
      </li>
    </S.SocialMidias>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Container>
)

export default Footer
