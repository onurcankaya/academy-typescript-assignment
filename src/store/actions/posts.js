export const POSTS_FETCH = 'POSTS_FETCH'
export const POSTS_SET = 'POSTS_SET'
export const POSTS_CLEAR = 'POSTS_CLEAR'

export const postsFetch = () => ({
  type: POSTS_FETCH,
})

export const postsSet = (posts) => ({
  type: POSTS_SET,
  payload: { posts },
})

export const postsClear = () => ({
  type: POSTS_CLEAR,
})
