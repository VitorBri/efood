import { RestaurantsContainer, List } from './styles'
import Restaurant from '../Restaurant'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'

const RestaurantsList = () => (
  <RestaurantsContainer>
    <div className="container">
      <List>
        <Restaurant
          title="Hioki Sushi "
          rate="4.9"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
          categorys={['Destaque da semanda', 'Japonesa']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          rate="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao}
          categorys={['Italiana']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          rate="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao}
          categorys={['Italiana']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          rate="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao}
          categorys={['Italiana']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          rate="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao}
          categorys={['Italiana']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          rate="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao}
          categorys={['Italiana']}
        />
      </List>
    </div>
  </RestaurantsContainer>
)

export default RestaurantsList
