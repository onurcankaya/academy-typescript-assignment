import { toLocalPost } from '../models/mappers'

export class ApiService {
  public async fetchPosts() {
    const res = await fetch('/posts.json')

    const posts = await res.json()

    const mapped = posts.map(toLocalPost)

    return mapped
  }
}