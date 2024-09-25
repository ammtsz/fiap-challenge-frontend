'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Button } from '../Button';
import { Label } from '../Label';
import { Trash as TrashIcon } from 'react-feather';
import { compressImage, convertToBase64 } from '@/utils/image';
import { Toast, useToast } from '@/components';

interface UploadProps extends React.ComponentProps<'div'> {
  id: string;
  message: string;
  className?: string;
  initialBase64?: string;
  label?: {
    text: string;
    variation?: 'primary' | 'default';
  };
  handleUpload?: (base64String: string) => void;
}

export const Upload: React.FC<UploadProps> = ({
  message,
  className,
  label,
  id,
  initialBase64,
  handleUpload,
}) => {
  const [base64, setBase64] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { addToast, removeToast, toasts } = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    if (!file) return;

    const compressedFile = await compressImage(file);
    if (compressedFile) {
      const base64String = await convertToBase64(compressedFile);
      setBase64(base64String);
      handleUpload && handleUpload(base64String);
    } else {
      addToast({
        message: 'Erro ao carregar a imagem. Tente novamente.',
        type: 'error',
      });
    }
  };

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.value = '';
  };

  const handleResetImage = () => {
    setBase64(null);
    handleUpload && handleUpload('');
  };

  useEffect(() => {
    if (initialBase64) {
      setBase64(initialBase64);
    }
  }, [initialBase64]);

  return (
    <div className={`w-full flex flex-col ${className}`}>
      <div className='flex min-w-full justify-between items-baseline '>
        {label && (
          <Label htmlFor={id} variation={label.variation}>
            {label.text}
          </Label>
        )}
        {base64 && (
          <Button
            type='button'
            onClick={handleResetImage}
            className='ml-auto flex items-center'
            variation='ghost'
          >
            Apagar <span className='ml-2 hidden xs:block'>imagem</span>{' '}
            <TrashIcon className='h-5' />
          </Button>
        )}
      </div>
      <div className='flex tertiary_btn hover:bg-white w-full min-h-32 justify-center items-center'>
        {base64 ? (
          <Image
            src={base64}
            alt='Imagem carregada'
            className=''
            width={200}
            height={200}
          />
        ) : (
          <Button
            type='button'
            variation='ghost'
            onClick={() => fileInputRef.current?.click()}
          >
            {message}
          </Button>
        )}
        <input
          id={id}
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          onClick={onClick}
          ref={fileInputRef}
          className='hidden'
        />
      </div>
      <Toast removeToast={removeToast} toasts={toasts} />
    </div>
  );
};

export default Upload;
