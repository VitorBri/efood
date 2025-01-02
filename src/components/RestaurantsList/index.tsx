import Restaurant from '../Restaurant'

import * as S from './styles'

type Props = {
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  const getCategorys = (restaurant: Restaurants) => {
    const categorys = []

    if (restaurant.destacado === true) {
      categorys.push('Destaque da semana')
    }

    if (restaurant.tipo) {
      categorys.push(restaurant.tipo)
    }

    return categorys
  }

  return (
    <S.RestaurantsContainer>
      <div className="container">
        <S.List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              title={restaurant.titulo}
              rate={restaurant.avaliacao}
              description={restaurant.descricao}
              image={restaurant.capa}
              categorys={getCategorys(restaurant)}
              to={`/restaurant/${restaurant.id}`}
            />
          ))}
        </S.List>
      </div>
    </S.RestaurantsContainer>
  )
}

export default RestaurantsList
