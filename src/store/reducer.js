import { DECREMENT, INCREMENT } from "./const"

const initState = {
  count: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload }
    case DECREMENT:
      return { count: state.count - action.payload }
    default:
      return state
  }
}