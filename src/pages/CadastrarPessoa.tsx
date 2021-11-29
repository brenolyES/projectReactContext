import { PessoaFormikDTO } from "../model/PessoaDTO"
import { Formik, Field, Form, FormikHelpers } from 'formik';
import api from "../api";
import { useNavigate } from "react-router";
import InputMask from "react-input-mask";


const CadastrarPessoa = () => {

  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='contentCadastrarPessoa'>
        <h1>Cadastrar nova pessoa</h1>
        <Formik
          initialValues={{
            nome: '',
            email: '',
            cpf: '',
            dataNascimento: ''
          }}
          onSubmit={async(
            values: PessoaFormikDTO,
            { setSubmitting }: FormikHelpers<PessoaFormikDTO>
          ) => {
            await api.post('/pessoa', values);
            navigate('/pessoa');
            setSubmitting(false);
            console.log(values);
          }}
        >
          <Form>
            <div>
              <label htmlFor="nome">nome</label>
              <br />
              <Field id="nome" name="nome" placeholder="nome" />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <br />
              <Field type='email' id="email" name="email" placeholder="email" />
            </div>
            <div>
              <label htmlFor="cpf">cpf</label>
              <br />
              <Field id="cpf" name="cpf" placeholder="cpf" type="text" maxLength='11'/>
            </div>
            <div>
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <br />
              <Field id="dataNascimento" name="dataNascimento" placeholder="data de Nascimento" type="text" />
            </div>
            <button type="submit">Cadastrar</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default CadastrarPessoa;
