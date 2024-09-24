'use client';

import { Button, Card, Input, PageContainer } from '@/components';
import { InputRadio } from '@/components/InputRadio';
import { useFormik } from 'formik';
import { ErrorMessage } from '@/components/ErrorMessage';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { createUser } from '@/api/user';

const Signup = () => {

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Este campo é obrigatório.'),
    email: Yup.string().email('E-mail inválido').required('Este campo é obrigatório.'),
    password: Yup.string().required('Este campo é obrigatório.'),
    confirmPassword: Yup.string().required('Este campo é obrigatório').oneOf([Yup.ref('password')], 'As senhas precisam ser iguais.'),
    role: Yup.string().required('Você precisa escolher entre Aluno ou Professor.')
  })

  const submitFormData = async (values: {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    role: string
  }) => {
    const response = await createUser(values);
    if (response.success) {
      alert('Usuário criado com sucesso!');
      router.push('/');
    } else {
      alert(response.error);
    }
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''
    },
    validationSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      submitFormData(values);
    }
  })


  return (
    <PageContainer>
      <p className='block text-center font-bold mb-12 mt-24 text-2xl'>
        Preencha os dados abaixo para se registrar:
      </p>
      <Card className='px-[12vw] xl:px-44 py-16 max-w-screen-md'>
        <form className='space-y-8 w-full max-w-md' onSubmit={formik.handleSubmit} method="post">
          <Input
            id='username'
            name='username'
            label={{ text: 'Nome de usuário:' }}
            type='text'
            placeholder='Digite um nome de usuário...'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username ?
            <ErrorMessage>{formik.errors.username}</ErrorMessage> :
            null
          }
          <Input
            id='email'
            name='email'
            label={{ text: 'E-mail:' }}
            type='text'
            placeholder='Digite seu e-mail...'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email ?
            <ErrorMessage>{formik.errors.email}</ErrorMessage> :
            null
          }
          <Input
            id='password'
            name='password'
            label={{ text: 'Senha:' }}
            type='password'
            placeholder='Digite sua senha:'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password ?
            <ErrorMessage>{formik.errors.password}</ErrorMessage> :
            null
          }
          <Input
            id='confirmPassword'
            name='confirmPassword'
            label={{ text: 'Confirme sua senha:' }}
            type='password'
            placeholder='Confirme sua senha:'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirmPassword ?
            <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage> :
            null
          }

            <fieldset id="role" onChange={formik.handleChange} onBlur={formik.handleBlur}>
            Tipo de usuário:
            <InputRadio id="student" name="role" value="student" label="Aluno" />
            <InputRadio id="teacher" name="role" value="teacher" label="Professor" />
            {formik.errors.role ?
            <ErrorMessage><br />{formik.errors.role}</ErrorMessage> :
            null
            }

            </fieldset>


          <Button
            className='bg-primary text-white w-full p-2 rounded-md'
            type='submit'
          >
            Registrar
          </Button>
          <p className='block text-center'>
            Já possui uma conta? Faça o
            <span>
              <Link
                href='/login'
                className='text-blue-500 underline pl-1 text-nowrap'
              >
                login.
              </Link>
            </span>
            </p>
          </form>
        </Card>
    </PageContainer>
  );
};

export default Signup;
