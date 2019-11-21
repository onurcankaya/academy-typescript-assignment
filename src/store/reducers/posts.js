import { POSTS_CLEAR, POSTS_SET } from '../actions/posts'

const initialState = {
  loading: true,
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_SET: {
      const { posts } = action.payload

      return { ...state, loading: false, items: posts }
    }

    case POSTS_CLEAR: {
      const { items } = initialState

      return { ...state, loading: false, items }
    }
    default:
      return state
  }
}
