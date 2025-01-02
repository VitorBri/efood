declare type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: string
  descricao: string
  capa: string
  tipo: string
  cardapio: FoodItem[]
}

declare type FoodItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
