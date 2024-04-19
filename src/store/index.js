import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './slices/card-slice'

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
})

export default store
