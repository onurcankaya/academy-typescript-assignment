import { Moment } from 'moment'

export interface Post {
  id: string
  description: string
  text: string
  created: Moment
}

export interface ApiPost {
  id: string
  description: string
  text: string
  created: string
}
