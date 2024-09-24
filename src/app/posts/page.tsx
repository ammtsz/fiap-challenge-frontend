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
import { useRouter } from "next/navigation";
import Image from "next/image";
import defaultImage from "@/assets/book-default.svg";

const Posts = () => {
  const { posts, loadPosts } = usePostsContext();
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <PageTitle title="Lista de Posts" />
        {(user.role === ROLES.TEACHER || user.role === ROLES.ADMIN) && (
          <Button
            className="bg-primary text-white h-12 w-1/3 p-2 rounded-md mt-4 mr-3"
            onClick={() => router.push(`/create`)}
          >
            + Nova Postagem
          </Button>
        )}
      </div>

      <Divider />
      <SearchBar className="block md:hidden" />
      {posts.map((post) => {
        return (
          <div key={post.id} className="flex flex-col mb-8 min-w-70">
            <h2 className="text-primary font-bold">{post.title}</h2>
            {post.date && (
              <span className="font-normal text-[15px] leading-[18.15px]">
                {formatDate(post.date)} - Por {post.author} - às{" "}
                {formatTime(post.date)}
              </span>
            )}
            <div className="flex flex-col items-center md:flex-row-reverse text-justify">
              <div className="flex ml-4 mr-4 border border-primary rounded-md min-w-[200px] min-h-[200px] bg-white">
                <Image
                  src={post.image || defaultImage}
                  alt="Imagem da postagem"
                  width={200}
                  height={200}
                  className="my-auto"
                />
              </div>
              <p className="text-justify">{post.content}</p>
            </div>

            <div className="flex flex-col md:flex-row">
              <Button
                className="text-white h-12 w-1/3 p-2 rounded-md mt-4 mr-3"
                onClick={() => router.push(`/posts/${post.id}`)}
              >
                Continuar a leitura...
              </Button>
              {(user.role === ROLES.TEACHER || user.role === ROLES.ADMIN) && (
                <Button
                  variation="secondary"
                  className="h-12 w-1/3 p-2 rounded-md mt-4"
                  onClick={() => router.push(`/edit/${post.id}`)}
                >
                  Editar Postagem
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
