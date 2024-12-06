import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import Footer from '../../components/Footer'
import { FoodItem } from '../../components/FoodsList'

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
  const [restaurant, setRestaurant] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantsList restaurants={restaurant} />
      <Footer />
    </>
  )
}

export default Home
