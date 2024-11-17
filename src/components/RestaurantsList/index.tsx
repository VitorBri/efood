import { RestaurantsContainer, List } from './styles'
import Restaurant from '../Restaurant'

import RestaurantOption from '../../models/Restaurants'

export type Props = {
  restaurants: RestaurantOption[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantsContainer>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            title={restaurant.title}
            rate={restaurant.rate}
            description={restaurant.description}
            image={restaurant.image}
            categorys={restaurant.categorys}
            link={restaurant.link}
          />
        ))}
      </List>
    </div>
  </RestaurantsContainer>
)

export default RestaurantsList
