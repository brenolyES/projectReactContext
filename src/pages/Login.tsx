import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext'
import { LoginDTO } from '../model/LoginDTO'

const Login = () => {

  const { handleLogin, setActiveLink } = useContext<any>(AuthContext);

  useEffect(()=>{
    setActiveLink('/login');
  },[])

  return (
    <div className='container'>
      <div className='contentLogin'>
        <div className='loginCard'>
          <h1>Login</h1>
          <Formik
            initialValues={{
              usuario: '',
              senha: ''
            }}
            onSubmit={(
              values: LoginDTO,
              { setSubmitting }: FormikHelpers<LoginDTO>
            ) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                handleLogin(values);
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
              <div className='user'>
                <label htmlFor="usuario"><strong>Usuário</strong></label>
                <br />
                <Field id="usuario" name="usuario" placeholder="Nome de usuário" />
              </div>
              <div className='password'>
                <label htmlFor="senha"><strong>Senha</strong></label>
                <br />
                <Field width='200px' id="senha" type='password' name="senha" placeholder="Senha de usuário" />
              </div>
              <div className='divButton'>
                <button type="submit">Entrar</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login;
