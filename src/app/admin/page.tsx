'use client';

import { deletePost } from '@/api/posts';
import {
  Button,
  Divider,
  Feedback,
  PageContainer,
  PageTitle,
  Pagination,
  SearchBar,
  useConfirmationModal,
  usePagination,
  withAuth,
  useToast,
  Toast,
  ConfirmationModal,
  LinkButton,
} from '@/components';
import { usePostsContext } from '@/contexts';
import { ROLES } from '@/enums/role';
import { Post } from '@/types';
import { formatDate } from '@/utils/dateAndTime';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Admin = () => {
  const { posts, loadPosts } = usePostsContext();
  const router = useRouter();
  const { currentPage, currentPosts, handlePageChange } = usePagination({
    posts,
  });
  const { addToast, removeToast, toasts } = useToast();

  const handleDelete = async (id: string) => {
    const response = await deletePost(id);
    if (response.success) {
      loadPosts();
      addToast({
        message: 'Post excluído com sucesso',
      });
    } else {
      addToast({
        message: response.error,
        type: 'error',
      });
    }
  };

  const { isModalOpen, handleCloseModal, handleConfirm, handleOpenModal } =
    useConfirmationModal(handleDelete);

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderButtons = (post: Post, className?: string) => {
    return (
      <div className={`flex flex-col md:flex-row gap-2 ${className}`}>
        <Button
          variation='secondary'
          className='h-10 md:h-12 flex-grow md:flex-grow-0'
          onClick={() => router.push(`/edit/${post.id}`)}
        >
          Editar
        </Button>
        <Button
          variation='danger'
          className='h-10 md:h-12 flex-grow md:flex-grow-0 font-bold'
          onClick={handleOpenModal(post.id as string)}
        >
          Excluir
        </Button>
      </div>
    );
  };

  return (
    <PageContainer>
      <PageTitle title='Administração de Postagens' />
      <Divider />
      <SearchBar className='block md:hidden mb-12' />
      {!currentPosts.length ? (
        <Feedback
          title='Ops!'
          description='Nenhum conteúdo encontrado'
          className='mt-[50px] mb-[80px]'
        />
      ) : (
        currentPosts.map((post) => {
          return (
            <div key={post.id} className='flex flex-col mb-16'>
              <div className='flex justify-between'>
                <Link className='flex flex-col' href={`/posts/${post.id}`}>
                  <h2 className='text-primary font-bold text-lg line-clamp-2 hover:text-primary_hover '>
                    {post.title}
                  </h2>
                  <span className='text-sm leading-[18.15px] mb-4'>
                    {formatDate(post.date as Date)} - Por Professor(a){' '}
                    {post.author}
                  </span>
                </Link>
                {renderButtons(post, 'hidden md:flex ml-4')}
              </div>

              <p className='text-justify line-clamp-6 md:line-clamp-4'>
                {post.content}
              </p>
              {renderButtons(post, 'md:hidden mt-4')}
            </div>
          );
        })
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        title='Excluir Postagem'
        actionName='Excluir'
      />
      <Toast removeToast={removeToast} toasts={toasts} />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
      <LinkButton variation='ghost' className='w-fit mx-auto mt-12' href='/'>
        Ir para a página principal
      </LinkButton>
    </PageContainer>
  );
};

export default withAuth(Admin, [ROLES.ADMIN]);
