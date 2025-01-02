import { createSlice } from '@reduxjs/toolkit'

type CartItem = {
  id: number
  title: string
  price: number
  image: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  deliveryIsOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  deliveryIsOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const food = state.items.find((item) => item.id === action.payload.id)

      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('Já foi adicionado ao carrinho')
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, close, open, remove, clear } = cartSlice.actions
export default cartSlice.reducer
