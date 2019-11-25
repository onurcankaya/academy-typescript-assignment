import { toLocalPost } from '../models/mappers'
import { ApiPost, Post } from '../models/post'

export class ApiService {
  public async fetchPosts() {
    const res = await fetch('/posts.json')

    const posts: Array<ApiPost> = await res.json()

    const mapped: Array<Post> = posts.map(toLocalPost)

    return mapped
  }
}
