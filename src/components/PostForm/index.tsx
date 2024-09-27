'use client';

import {
  Button,
  ConfirmationModal,
  ErrorMessage,
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
    formik,
    handleChange,
    handleUpload,
    handleDelete,
    handleGoBack,
  } = usePostForm({ id, addToast });

  const { isModalOpen, handleConfirm, handleOpenModal, handleCloseModal } =
    useConfirmationModal(handleDelete);

  if (hasError) {
    return (
      <Feedback
        title='Post não encontrado!'
        description='Verifique se o post existe na página principal.'
        buttonMessage='Voltar'
        href='/'
        className='mt-[20px]'
      />
    );
  }

  return (
    <>
      {!hasError ? (
        <form
          onSubmit={formik.handleSubmit}
          className='font-inter space-y-4 sm:space-y-8 w-full'
        >
          <Input
            id='title'
            label={{
              text: 'Título',
              variation: 'primary',
            }}
            placeholder='Título da postagem'
            value={formik.values.title}
            onChange={handleChange}
            hasError={!!formik.errors.title}
          />
          {formik.errors.title ? (
            <ErrorMessage>{formik.errors.title}</ErrorMessage>
          ) : null}
          <TextArea
            id='content'
            label={{
              text: 'Conteúdo',
              variation: 'primary',
            }}
            placeholder='Digite o conteúdo da postagem'
            style={{ height: '225px' }}
            value={formik.values.content}
            onChange={handleChange}
            hasError={!!formik.errors.content}
          />
          {formik.errors.content ? (
            <ErrorMessage>{formik.errors.content}</ErrorMessage>
          ) : null}
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
              <Button
                className='md:mt-8 flex-grow'
                variation='danger'
                type='button'
                onClick={handleOpenModal(id)}
              >
                Excluir
              </Button>
            )}
            <Button
              className={`md:mt-8 ${id ? 'flex-grow' : 'auto'}`}
              variation='tertiary'
              type='button'
              onClick={handleGoBack}
            >
              {id ? 'Voltar' : 'Cancelar'}
            </Button>
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
