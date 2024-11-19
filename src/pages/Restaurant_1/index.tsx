import BannerRestaurant from '../../components/BannerRestaurant'
import Header from '../../components/Header'

import macarrao from '../../assets/images/macarrao.png'

const Restaurant1 = () => (
  <>
    <Header />
    <BannerRestaurant
      category="Italiana"
      name="La Dolce Vita Trattoria"
      imageBack={macarrao}
    />
  </>
)

export default Restaurant1
