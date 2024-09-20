'use client';

import { Button, Input, Label, TextArea } from '@/components';

interface PostFormProps extends React.ComponentProps<'form'> {
  id?: string;
}

export const PostForm: React.FC<PostFormProps> = ({ id }) => {
  return (
    <form className='font-inter space-y-4 sm:space-y-8 w-full'>
      <Input
        id='author'
        label={{
          text: 'Autor',
          variation: 'primary',
        }}
        placeholder='Nome do Autor'
      />
      <Input
        id='title'
        label={{
          text: 'Título',
          variation: 'primary',
        }}
        placeholder='Título da postagem'
      />
      <div className='flex flex-col sm:flex-row sm:items-center mt-8'>
        <Label className='mr-8' variation='primary'>
          Imagem:
        </Label>
        <Button
          variation='tertiary'
          className='max-w-full'
          aria-label='Clique para carregar uma imagem'
          type='button'
        >
          Clique para carregar uma imagem
        </Button>
      </div>
      <TextArea
        id='content'
        label={{
          text: 'Conteúdo',
          variation: 'primary',
        }}
        placeholder='Digite o conteúdo da postagem'
        style={{ height: '225px' }}
      />
      <div className='flex flex-col md:flex-row-reverse gap-2 w-full'>
        <Button
          className='mt-4 ml-auto flex-grow sm:mt-8 sm:w-auto'
          variation='primary'
          type='submit'
        >
          {/* TODO: adicionar lógica para mostrar o texto correto */}
          Publicar/Salvar
        </Button>
        <Button className='md:mt-8 flex-grow' variation='danger' type='button'>
          Excluir
        </Button>
        <Button
          className='md:mt-8 flex-grow'
          variation='tertiary'
          type='button'
        >
          Voltar
        </Button>
      </div>
    </form>
  );
};
