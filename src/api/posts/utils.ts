import { PostResponse } from './types'

export const mapPosts = (posts: PostResponse[]) => posts.map(post => {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    date: post.date,
    author: post.user.username
  }

})