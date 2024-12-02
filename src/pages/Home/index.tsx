import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import RestaurantOption from '../../models/Restaurants'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import Footer from '../../components/Footer'

const restaurantHome: RestaurantOption[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    image: sushi,
    rate: '4.9',
    categorys: ['Destaque da semana', 'Japonesa'],
    link: '/restaurant'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    rate: '4.6',
    categorys: ['Italiana'],
    link: '/restaurant'
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    rate: '4.6',
    categorys: ['Italiana'],
    link: '/restaurant'
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    rate: '4.6',
    categorys: ['Italiana'],
    link: '/restaurant'
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    rate: '4.6',
    categorys: ['Italiana'],
    link: '/restaurant'
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    rate: '4.6',
    categorys: ['Italiana'],
    link: '/restaurant'
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantsList restaurants={restaurantHome} />
    <Footer />
  </>
)

export default Home
