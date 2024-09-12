"use client"

import { SearchBar } from "@/components/SearchBar";
import { usePostsContext } from "@/contexts/posts";
import { formatDate, formatTime } from "@/utils/dateAndTime";

const Posts = () =>  {
  const { posts } = usePostsContext()

  return (
    <main className="page">
      <h1>Posts</h1>
      <SearchBar className="block md:hidden" />
      {posts.map(post => {
        return (
          <div key={post.id} className="flex flex-col mb-8">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>{post.author}</span>
            <span>{formatDate(post.date)}</span>
            <span>{formatTime(post.date)}</span>
          </div>
        )
      })}
    </main>
  );
}

export default Posts;
