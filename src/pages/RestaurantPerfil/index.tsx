import { useParams } from 'react-router-dom'

import BannerRestaurant from '../../components/BannerRestaurant'
import Header from '../../components/Header'

import FoodsList from '../../components/FoodsList'

import { primeiraLetraEmMaiusculo } from '../../components/Restaurant'
import { useGetPerfilRestaurantsQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Restaurant = () => {
  const { id } = useParams()

  const { data: perfil } = useGetPerfilRestaurantsQuery(id!)

  if (!perfil) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <BannerRestaurant
        category={primeiraLetraEmMaiusculo(perfil.tipo)}
        name={perfil.titulo}
        imageBack={perfil.capa}
      />
      <FoodsList foods={perfil.cardapio} />
      <Cart />
    </>
  )
}

export default Restaurant
