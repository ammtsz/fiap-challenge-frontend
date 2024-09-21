"use client";

import {
  SearchBar,
  PageTitle,
  Divider,
  PageContainer,
  withAuth,
  Button,
} from "@/components";
import { usePostsContext } from "@/contexts";
import { ROLES } from "@/enums/role";
import { formatDate, formatTime } from "@/utils/dateAndTime";
import { useEffect } from "react";
const Posts = () => {
  const { posts, loadPosts } = usePostsContext();

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <PageTitle title="Lista de Posts" />
      <Divider />
      <SearchBar className="block md:hidden" />
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="flex flex-col mb-8 
          "
          >
            <h2 className="text-primary font-bold">{post.title}</h2>
            <span className="font-normal text-[15px] leading-[18.15px]">
              {formatDate(post.date)} - Por {post.author} - às{" "}
              {formatTime(post.date)}
            </span>
            <div className="flex flex-row-reverse ">
              <img
                src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
                alt="imagem default" className="w-32 h-32 mr-4 border border-primary rounded-md " /> <div> <p>{post.content}</p> </div>
            </div>
            <Button
              className="bg-primary text-white h-12 w-1/3 p-2 rounded-md mt-4"
              type="submit"
            >
              Continuar a leitura...
            </Button>
          </div>
        );
      })}
    </PageContainer>
  );
};

export default withAuth(Posts, [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT]);
