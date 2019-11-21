import moment from 'moment'

export const toLocalPost = (post) => ({
  ...post,
  created: moment(post.created),
})
