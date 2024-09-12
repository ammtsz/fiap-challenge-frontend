"use client"

import { SearchBar, PageTitle, Divider } from "@/components";
import { usePostsContext } from "@/contexts";
import { formatDate, formatTime } from "@/utils/dateAndTime";

const Posts = () =>  {
  const { posts } = usePostsContext()

  return (
    <main className="page">
      <PageTitle title="Lista de Posts"/>
      <Divider />
      <SearchBar className="block md:hidden"/>
      
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
