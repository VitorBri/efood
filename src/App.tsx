import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from './components/Hero'
import { GlobalCss } from './styles'
import RestaurantsList from './components/RestaurantsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <RestaurantsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
