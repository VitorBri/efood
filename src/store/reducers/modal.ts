import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FoodItem } from '../../components/FoodsList'

type ModalState = {
  isOpenModal: boolean
  selectedFood: FoodItem | null
}

const initialState: ModalState = {
  isOpenModal: false,
  selectedFood: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<FoodItem>) => {
      state.isOpenModal = true
      state.selectedFood = action.payload
    },
    close: (state) => {
      state.isOpenModal = false
      state.selectedFood = null
    }
  }
})

export const { close, open } = modalSlice.actions
export default modalSlice.reducer
