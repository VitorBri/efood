import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurant } = useGetRestaurantsQuery()

  if (restaurant) {
    return (
      <>
        <Hero />
        <RestaurantsList restaurants={restaurant} />
      </>
    )
  }

  return <Loader />
}

export default Home
