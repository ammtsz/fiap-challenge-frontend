'use client'

import {
  SearchBar,
  PageTitle,
  Divider,
  PageContainer,
  withAuth,
  Button,
  Feedback,
} from '@/components'
import { usePostsContext, useUserContext } from '@/contexts'
import { ROLES } from '@/enums/role'
import { formatDate } from '@/utils/dateAndTime'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PaginationComponent from '@/components/Pagination'
import Image from 'next/image'
import defaultImage from '@/assets/book-default.svg'
import { Post } from '@/types'

const Posts = () => {
  const { posts, loadPosts } = usePostsContext()
  const { user } = useUserContext()
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 2 // Número de posts por página
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Ordena os posts por data de forma decrescente.
  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateB - dateA
  })

  // Calcula o índice do último post que deve ser exibido na página atual.
  const indexOfLastPost = currentPage * postsPerPage
  // Calcula o índice do primeiro post que deve ser exibido na página atual.
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  // Array que contém os posts que devem ser exibidos na página atual.
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost)

  // Converte a primeira letra da string para maiúscula.

  useEffect(() => {
    loadPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderImage = (post: Post, className: string) => (
    <div
      className={`flex border border-primary rounded-md min-w-[200px] min-h-[200px] bg-white content-center ${className}`}
    >
      <Image
        src={post.image || defaultImage}
        alt='Imagem da postagem'
        width={200}
        height={200}
        className='my-auto rounded-md p-[1px]'
      />
    </div>
  )

  return (
    <PageContainer>
      <div className='flex flex-row md:items-center justify-between'>
        <PageTitle title='Lista de Posts' />
        {(user.role === ROLES.TEACHER || user.role === ROLES.ADMIN) && (
          <Button
            className='mb-6 flex justify-center'
            onClick={() => router.push(`/create`)}
            aria-label='Criar nova postagem'
          >
            + <span className='hidden md:block ml-1'>Nova</span>
            <span className='hidden sm:block ml-2'>Postagem</span>
          </Button>
        )}
      </div>
      <Divider />
      <SearchBar className='block md:hidden mb-8' />
      {currentPosts.length === 0 ? (
        <Feedback
          title='Ops!'
          description='Nenhum conteúdo encontrado'
          className='mt-[50px] mb-[80px]'
        />
      ) : (
        currentPosts.map((post) => {
          return (
            <div key={post.id} className='flex mb-16'>
              <div className='flex flex-col min-w-70'>
                <h2 className='text-primary font-bold'>{post.title}</h2>
                {post.date && (
                  <span className='font-normal text-sm leading-[18.15px] mb-4'>
                    {formatDate(post.date)} - Por Professor(a) {post.author}
                  </span>
                )}
                <div className='flex flex-col items-center md:flex-row-reverse text-justify'>
                  {renderImage(post, 'md:hidden mb-4')}
                  <p className='text-justify line-clamp-6 md:line-clamp-4'>
                    {post.content}
                  </p>
                </div>

                <div className='flex flex-col md:flex-row'>
                  <Button
                    className='text-white h-12 xl:w-1/3 p-2 rounded-md mt-4 md:mr-3'
                    onClick={() => router.push(`/posts/${post.id}`)}
                  >
                    Continuar a leitura...
                  </Button>
                  {((user.role === ROLES.TEACHER &&
                    user.username === post.author) ||
                    user.role === ROLES.ADMIN) && (
                    <Button
                      variation='secondary'
                      className='h-12 xl:w-1/3 p-2 rounded-md mt-4'
                      onClick={() => router.push(`/edit/${post.id}`)}
                    >
                      Editar Postagem
                    </Button>
                  )}
                </div>
              </div>
              {renderImage(post, 'hidden md:block self-end ml-4 mb-0')}
            </div>
          )
        })
      )}
      <PaginationComponent
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  )
}

export default withAuth(Posts, [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT])
