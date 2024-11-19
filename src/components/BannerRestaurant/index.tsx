import { FundoBanner, Category, Name } from './styles'

import macarrao from '../../assets/images/macarrao.png'

type Props = {
  name: string
  imageBack: string
  category: string
}

const BannerRestaurant = ({ category, imageBack, name }: Props) => (
  <FundoBanner
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageBack})`
    }}
  >
    <div className="container">
      <Category>{category}</Category>
      <Name>{name}</Name>
    </div>
  </FundoBanner>
)

export default BannerRestaurant
