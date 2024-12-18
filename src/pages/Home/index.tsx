import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

import { FoodItem } from '../../components/FoodsList'

import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: string
  descricao: string
  capa: string
  tipo: string
  cardapio: FoodItem[]
}
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

  return <h4>Carregando...</h4>
}

export default Home
