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
import { formatDate, formatTime } from "@/utils/dateAndTime"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import PaginationComponent from "@/components/Pagination";

const Posts = () => {
  const { posts, loadPosts } = usePostsContext();
  const { user } = useUserContext();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2; // Número de posts por página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  // Ordena os posts por data de forma decrescente.
  const indexOfLastPost = currentPage * postsPerPage;
  // Calcula o índice do último post que deve ser exibido na página atual. 
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Calcula o índice do primeiro post que deve ser exibido na página atual.
  
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  // Array que contém os posts que devem ser exibidos na página atual.

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
      {currentPosts.map((post) => {
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
      <PaginationComponent 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </PageContainer>
  );
};

export default withAuth(Posts, [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT]);
