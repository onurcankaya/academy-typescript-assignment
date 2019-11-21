export const POSTS_FETCH = 'POSTS_FETCH'
export const POSTS_SET = 'POSTS_SET'
export const POSTS_CLEAR = 'POSTS_CLEAR'

interface Post {
  id: string
  text: string
  description: string
  created: string
}

interface PostsFetchAction {
  type: typeof POSTS_FETCH
}

interface PostsSetAction {
  type: typeof POSTS_SET
  payload: { posts: Array<Post> }
}

interface PostsClearAction {
  type: typeof POSTS_CLEAR
}

export const postsFetch = () => ({
  type: POSTS_FETCH,
})

export const postsSet = (posts: Array<Post>) => ({
  type: POSTS_SET,
  payload: { posts },
})

export const postsClear = () => ({
  type: POSTS_CLEAR,
})

export type Action = PostsFetchAction | PostsSetAction | PostsClearAction
