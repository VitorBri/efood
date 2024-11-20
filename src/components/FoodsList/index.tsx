import { List, FoodsContainer } from './styles'
import Food from '../Food'

import FoodOption from '../../models/Foods'

export type Props = {
  foods: FoodOption[]
}

const FoodsList = ({ foods }: Props) => (
  <FoodsContainer>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Food
            key={food.id}
            title={food.title}
            image={food.image}
            description={food.description}
          />
        ))}
      </List>
    </div>
  </FoodsContainer>
)

export default FoodsList
