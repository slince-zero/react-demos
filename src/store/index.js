import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './slices/card-slice'
import testSlice from './test/test'

const store = configureStore({
  reducer: {
    card: cardReducer,
    counter: testSlice,
  },
})

export default store
