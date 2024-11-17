import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant1 from './pages/Restaurant#1'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant1" element={<Restaurant1 />} />
  </Routes>
)

export default Rotas
