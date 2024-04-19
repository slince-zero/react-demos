import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard(state, action) {
      state.push(action.payload)
    },
    removeCard(state, action) {
      return state.filter((card) => card.id !== action.payload)
    },
  },
})

export const { addCard, removeCard } = cardSlice.actions

export default cardSlice.reducer

/**
 * Redux slice是Redux状态的一部分，通常对应于应用的一个
 * 特定功能或者领域。
 *
 * name：slice的名称，它会被用作生成action types的前缀。
 * initialState：slice的初始状态。
 * reducers：一个对象，它的每个键都是一个reducer函数。这些
 * 函数会接收当前的状态和一个action，然后返回新的状态。
 *
 * addCard：这个函数接收当前的状态和一个action，然后将action的
 * payload添加到状态数组的末尾。这个payload应该是一个卡片对象。
 *
 *
 * removeCard：这个函数接收当前的状态和一个action，然后返回一个
 * 新的状态数组，这个数组不包含id等于action的payload的卡片。
 *
 * updateCard：这个函数接收当前的状态和一个action，然后在状态数组中
 * 找到id等于action的payload的卡片，然后更新这个卡片的title和description属性。
 */
