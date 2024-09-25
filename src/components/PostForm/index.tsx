'use client';

import {
  Button,
  ConfirmationModal,
  Feedback,
  Input,
  TextArea,
  Toast,
  Upload,
  useConfirmationModal,
  useToast,
} from '@/components';
import { usePostForm } from './hooks/usePostForm';

interface PostFormProps extends React.ComponentProps<'form'> {
  id?: string;
}

export const PostForm: React.FC<PostFormProps> = ({ id }) => {
  const { addToast, removeToast, toasts } = useToast();

  const {
    post,
    hasError,
    handleChange,
    handleSubmit,
    handleUpload,
    handleDelete,
    handleGoBack,
  } = usePostForm({ id, addToast });

  const { isModalOpen, handleConfirm, handleOpenModal, handleCloseModal } =
    useConfirmationModal(handleDelete(id as string));

  return (
    <>
      {!hasError ? (
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
          <Upload
            id='image'
            message='Clique para carregar uma imagem'
            label={{ text: 'Imagem', variation: 'primary' }}
            handleUpload={handleUpload}
            initialBase64={post.image}
          />
          <div className='flex flex-col md:flex-row-reverse gap-2 w-full'>
            <Button
              className={`mt-4 md:ml-auto sm:mt-8 sm:w-auto ${
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
                  onClick={handleOpenModal}
                >
                  Excluir
                </Button>
                <Button
                  className='md:mt-8 flex-grow'
                  variation='tertiary'
                  type='button'
                  onClick={handleGoBack}
                >
                  Voltar
                </Button>
              </>
            )}
          </div>
        </form>
      ) : (
        <Feedback
          title='Post não encontrado!'
          description='Verifique se o post existe na página principal.'
          buttonMessage='Voltar'
          href='/'
          className='mt-[20px]'
        />
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        title='Excluir Postagem'
        actionName='Excluir'
      />
      <Toast removeToast={removeToast} toasts={toasts} />
    </>
  );
};
