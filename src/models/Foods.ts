class FoodOption {
  title: string
  description: string
  image: string
  id: number

  constructor(title: string, description: string, image: string, id: number) {
    this.description = description
    this.id = id
    this.title = title
    this.image = image
  }
}

export default FoodOption
