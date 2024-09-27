'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getPostById } from '@/api/posts';
import {
  Button,
  Divider,
  Feedback,
  PageContainer,
  PageTitle,
  withAuth,
} from '@/components';
import { ROLES } from '@/enums/role';
import { Post as IPost } from '@/types';
import defaultImage from '@/assets/book-default.svg';
import { formatDate } from '@/utils/dateAndTime';
import { useUserContext } from '@/contexts';
import React from 'react';

const Post = () => {
  const [post, setPost] = useState<IPost>();

  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const { user } = useUserContext();

  const handleGoBack = () => {
    router.back();
  };

  const loadPost = async (id: string) => {
    const response = await getPostById(id);
    if (response.success) {
      setPost(response.value);
    }
  };

  useEffect(() => {
    loadPost(id as string);
  }, [id]);

  const isUserTheAuthor =
    post && user.username === post.author && user.role === ROLES.TEACHER;
  const isAdmin = user.role === ROLES.ADMIN;
  const showEditButton = isAdmin || isUserTheAuthor;

  return (
    <PageContainer>
      <div className='flex flex-row md:items-center items-start justify-between'>
        <PageTitle title='Lista de Posts' />
        {showEditButton && (
          <Button
            className='md:mb-6 flex justify-center'
            onClick={() => router.push(`/edit/${id}`)}
            aria-label='Editar postagem'
            variation='tertiary'
          >
            Editar
            <span className='hidden md:block ml-2'>Postagem</span>
          </Button>
        )}
      </div>
      <Divider />
      {post ? (
        <div className='flex flex-col mb-16'>
          <span className='flex flex-col ml-0 mt-0 md:ml-4 md:mt-4'>
            <h2 className='text-primary font-bold text-2xl'>{post.title}</h2>
            <p className='font-normal text-sm leading-[18.15px]'>
              {formatDate(post.date as Date)} - Por Professor(a) {post.author}
            </p>
          </span>
          <div className='flex flex-col items-center text-justify'>
            <div
              className={`flex border border-primary rounded-md min-w-[200px] min-h-[200px] bg-white content-center my-6`}
            >
              <Image
                src={post.image || defaultImage}
                alt='Imagem da postagem'
                width={300}
                height={200}
                className='my-auto rounded-md p-[1px]'
              />
            </div>
            <div className='flex flex-col gap-2'>
              {post.content.split('\n').map((paragraph, i) => (
                <p key={i} className='text-justify'>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Feedback title='Post não encontrado' />
      )}
      <Button
        variation='ghost'
        className='w-fit mx-auto'
        onClick={handleGoBack}
      >
        Voltar para a página anterior
      </Button>
    </PageContainer>
  );
};

export default withAuth(Post, [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT]);
