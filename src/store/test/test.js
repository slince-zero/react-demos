// 用来测试、学习redux toolkit的使用

/**
 * redux toolkit 是官方推荐的redux的工具包，用来简化redux的使用
 */

/**
 * Immer是一个用于管理不可变状态的JavaScript库。在JavaScript中，
 * 处理不可变数据结构（例如在Redux中）可能会很复杂和冗长，Immer通过
 * 使用更直观的方式来简化这个过程。
 * 
 * mmer的核心概念是"草稿状态"（draft state）。当你在Immer中修改状态时，
 * 你实际上是在修改一个草稿状态，这个草稿状态是当前状态的一个深拷贝。
 * 你可以直接修改这个草稿状态，就像修改普通的JavaScript对象一样。
 * 当你完成修改后，Immer会比较草稿状态和当前状态，然后生成一个新的不可变状态。
 * 
    import produce from "immer";

    const baseState = [
    {
        todo: "Learn typescript",
        done: true
    },
    {
        todo: "Try immer",
        done: false
    }
 ];

    const nextState = produce(baseState, draftState => {
    draftState.push({todo: "Tweet about it"});
    draftState[1].done = true;
    });

    在这个例子中，produce函数接收当前状态和一个"producer"函数。
    在"producer"函数中，你可以直接修改draftState。当"producer"函数完成后，
    produce函数会返回新的状态。


 * 使用 redux 更新状态的流程：
    * 1. 通过调用 dispatch(action) 来触发 action
    * 2. action 会传递给 reducer
    * 3. reducer 根据 action 的 type 来更新 state
    * 4. state 更新后，会触发所有订阅了 state 的组件重新渲染
    * 5. 重渲染后，组件会根据 state 的最新值来展示内容
    * 6. 重复上述步骤
*/

import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
  // name叫啥都行，只是一个标识符
  name: 'counter11',
  initialState: {
    value: 0,
  },
  reducers: {
    // increment、decrement、incrementByAmount都是action creator
    increment: (state) => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。
      // 并不是真正的改变 state 因为它使用了 immer 库
      // 当 immer 检测到 "draft state" 改变时，会基于这些改变去创建一个新的
      // 不可变的 state
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = testSlice.actions

export default testSlice.reducer
