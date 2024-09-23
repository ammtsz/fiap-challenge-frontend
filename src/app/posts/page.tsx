"use client";

import {
  SearchBar,
  PageTitle,
  Divider,
  PageContainer,
  withAuth,
  Button,
} from "@/components";
import { usePostsContext, useUserContext } from "@/contexts";
import { ROLES } from "@/enums/role";
import { formatDate, formatTime } from "@/utils/dateAndTime";
import { useEffect } from "react";

const Posts = () => {
  const { posts, loadPosts } = usePostsContext();
  const { user } = useUserContext();
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
          <div key={post.id} className="flex flex-col mb-8 min-w-70">
            <h2 className="text-primary font-bold">{post.title}</h2>
            <span className="font-normal text-[15px] leading-[18.15px]">
              {formatDate(post.date)} - Por {post.author} - às{" "}
              {formatTime(post.date)}
            </span>
            <div className="flex flex-col items-center md:flex-row-reverse text-justify">
              <img
                src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
                alt="imagem default"
                className="ml-4 w-32 h-32 mr-4 border border-primary rounded-md "
              />
              <p className="text-justify">{post.content}</p>
            </div>

            <div className="flex flex-col md:flex-row">
              <Button
                className="bg-primary text-white h-12 w-1/3 p-2 rounded-md mt-4 mr-3"
                type="submit"
              >
                Continuar a leitura...
              </Button>
              {(user.role === ROLES.TEACHER || user.role === ROLES.ADMIN) && (
                  <Button
                    className="bg-secondary text-black h-12 w-1/3 p-2 rounded-md mt-4"
                    type="submit"
                  >
                    Editar
                  </Button>
                )}
            </div>
          </div>
        );
      })}
    </PageContainer>
  );
};

export default withAuth(Posts, [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT]);
