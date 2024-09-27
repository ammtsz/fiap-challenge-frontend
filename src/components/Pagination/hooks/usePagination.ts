'use client';

import { useState } from "react";
import { Post } from '@/types'

interface UsePaginationProps {
  posts: Post[]
}

export const usePagination = ({ posts }: UsePaginationProps) => {

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2; // Número de posts por página
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Ordena os posts por data de forma decrescente.
  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  // Calcula o índice do último post que deve ser exibido na página atual.
  const indexOfLastPost = currentPage * postsPerPage;
  // Calcula o índice do primeiro post que deve ser exibido na página atual.
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Array que contém os posts que devem ser exibidos na página atual.
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return { currentPage, currentPosts, handlePageChange };

}