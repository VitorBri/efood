class RestaurantOption {
  title: string
  rate: string
  description: string
  image: string
  categorys: string[]
  id: number
  link: string

  constructor(
    title: string,
    rate: string,
    description: string,
    image: string,
    categorys: string[],
    id: number,
    link: string
  ) {
    this.id = id
    this.categorys = categorys
    this.image = image
    this.description = description
    this.rate = rate
    this.title = title
    this.link = link
  }
}

export default RestaurantOption
