import { useParams } from 'react-router-dom'

import BannerRestaurant from '../../components/BannerRestaurant'
import Header from '../../components/Header'
import FoodsList from '../../components/FoodsList'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

import { lowercaseLetter } from '../../utils'
import { useGetPerfilRestaurantsQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Restaurant = () => {
  const { id } = useParams() as RestaurantParams

  const { data: perfil } = useGetPerfilRestaurantsQuery(id)

  if (!perfil) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <BannerRestaurant
        category={lowercaseLetter(perfil.tipo)}
        name={perfil.titulo}
        imageBack={perfil.capa}
      />
      <FoodsList foods={perfil.cardapio} />
      <Cart />
    </>
  )
}

export default Restaurant
