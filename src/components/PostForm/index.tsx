'use client';

import { createPost, updatePost } from '@/api/posts';
import { Button, Input, Label, TextArea } from '@/components';
import { useUserContext } from '@/contexts';
import { PostData } from '@/types';
import { useEffect, useState } from 'react';

interface PostFormProps extends React.ComponentProps<'form'> {
  id?: string;
}

const INITIAL_STATE: PostData = {
  title: '',
  image: '',
  content: '',
};

export const PostForm: React.FC<PostFormProps> = ({ id }) => {
  const [post, setPost] = useState<PostData>(INITIAL_STATE);

  const { user } = useUserContext();

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { value } = event.target;
    setPost((prev) => ({ ...prev, [event.target.id]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (id) {
      updatePost(id, { ...post, userId: user.id });
    } else {
      createPost({ ...post, userId: user.id });
    }
    setPost(INITIAL_STATE);
    // TODO: redirecionar para a página de postagens ou do post
  };

  useEffect(() => {
    if (id) {
      // TODO: carregar dados do post
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className='font-inter space-y-4 sm:space-y-8 w-full'
    >
      <Input
        id='title'
        label={{
          text: 'Título',
          variation: 'primary',
        }}
        placeholder='Título da postagem'
        value={post.title}
        onChange={handleChange}
      />
      <TextArea
        id='content'
        label={{
          text: 'Conteúdo',
          variation: 'primary',
        }}
        placeholder='Digite o conteúdo da postagem'
        style={{ height: '225px' }}
        value={post.content}
        onChange={handleChange}
      />
      <div className='flex flex-col mt-8'>
        <Label className='mr-4' variation='primary'>
          Imagem
        </Label>
        <Button
          id='image'
          variation='tertiary'
          className='max-w-full h-28'
          aria-label='Clique para carregar uma imagem'
          type='button'
        >
          Clique para carregar uma imagem
        </Button>
      </div>
      <div className='flex flex-col md:flex-row-reverse gap-2 w-full'>
        <Button
          className={`mt-4 ml-auto sm:mt-8 sm:w-auto ${
            id ? 'flex-grow' : 'min-w-full md:min-w-64'
          }`}
          variation='primary'
          type='submit'
        >
          {id ? 'Salvar' : 'Publicar'}
        </Button>
        {id && (
          <>
            <Button
              className='md:mt-8 flex-grow'
              variation='danger'
              type='button'
            >
              Excluir
            </Button>
            <Button
              className='md:mt-8 flex-grow'
              variation='tertiary'
              type='button'
            >
              Voltar
            </Button>
          </>
        )}
      </div>
    </form>
  );
};
