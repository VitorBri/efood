import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantPerfil from './pages/RestaurantPerfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantPerfil />} />
  </Routes>
)

export default Rotas
