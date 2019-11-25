import moment from 'moment'
import { ApiPost, Post } from './post'

export const toLocalPost = (post: ApiPost): Post => ({
  ...post,
  created: moment(post.created),
})
