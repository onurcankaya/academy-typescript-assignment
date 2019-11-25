import { Post } from '../../models/post'
import { Action, POSTS_CLEAR, POSTS_SET } from '../actions/posts'

interface InitialStateTypes {
  loading: boolean
  items: Array<Post>
}

const initialState: InitialStateTypes = {
  loading: true,
  items: [],
}

export interface State {
  posts: Array<Post>
}

export default (state = initialState, action: Action): InitialStateTypes => {
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
