import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BannerRestaurant from '../../components/BannerRestaurant'
import Header from '../../components/Header'

import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'
import { Restaurants } from '../Home'
import { primeiraLetraEmMaiusculo } from '../../components/Restaurant'

const Restaurant = () => {
  const { id } = useParams()

  const [perfil, setPerfil] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPerfil(res))
  }, [id])

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
      <Footer />
    </>
  )
}

export default Restaurant
