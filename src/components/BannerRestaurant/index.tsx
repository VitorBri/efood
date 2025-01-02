import * as S from './styles'

type Props = {
  name: string
  imageBack: string
  category: string
}

const BannerRestaurant = ({ category, imageBack, name }: Props) => (
  <S.FundoBanner
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageBack})`
    }}
  >
    <div className="container">
      <S.Category>{category}</S.Category>
      <S.Name>{name}</S.Name>
    </div>
  </S.FundoBanner>
)

export default BannerRestaurant
