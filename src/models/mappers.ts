import moment from 'moment'

interface Post {
  id: string
  text: string
  description: string
  created: string
}

export const toLocalPost = (post: Post) => ({
  ...post,
  created: moment(post.created),
})
