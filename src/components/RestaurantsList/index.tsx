import { RestaurantsContainer, List } from './styles'
import Restaurant from '../Restaurant'

import { Restaurants } from '../../pages/Home'

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
    <RestaurantsContainer>
      <div className="container">
        <List>
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
        </List>
      </div>
    </RestaurantsContainer>
  )
}

export default RestaurantsList
