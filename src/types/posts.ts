export type PostData = {
  id: string,
  title: string,
  content: string,
  date: Date,
}

export type Post = PostData  & { author: string }