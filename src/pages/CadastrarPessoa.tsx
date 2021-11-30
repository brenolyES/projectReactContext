import { PessoaFormikDTO } from "../model/PessoaDTO"
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { ApiPessoa } from "../api";
import { useNavigate } from "react-router";
import { MdOutlineAddTask, BsPersonFill, AiTwotoneMail, FaBirthdayCake, HiDocumentText } from 'react-icons/all';


const CadastrarPessoa = () => {

  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='contentCadastrarPessoa'>
        <div className='card'>
          <h1>Cadastrar</h1>
          <br />
          <Formik
            initialValues={{
              nome: '',
              email: '',
              cpf: '',
              dataNascimento: ''
            }}
            onSubmit={async (
              values: PessoaFormikDTO,
              { setSubmitting }: FormikHelpers<PessoaFormikDTO>
            ) => {
              await ApiPessoa.post('/pessoa', values);
              navigate('/pessoa');
              setSubmitting(false);
              console.log(values);
            }}
          >
            <Form>
              <div>
                <label htmlFor="nome"><strong>Nome</strong> </label>
                <br />
                <div className='inputDiv'>
                  <BsPersonFill/>
                  <Field id="nome" name="nome" placeholder="Nome" />
                </div>
              </div>
              <div>
                <label htmlFor="email"><strong>E-mail</strong> </label>
                <br />
                <div className='inputDiv'>
                  <AiTwotoneMail/>
                  <Field type='email' id="email" name="email" placeholder="Email" />
                </div>
              </div>
              <div>
                <label htmlFor="cpf"><strong>Cpf</strong> </label>
                <br />
                <div className='inputDiv'>
                  <HiDocumentText/>
                  <Field id="cpf" name="cpf" placeholder="Cpf" type="text" maxLength='11' />
                </div>
              </div>
              <div>
                <label htmlFor="dataNascimento"><strong>Data de Nacmineto</strong> </label>
                <br />
                <div className='inputDiv'>
                  <FaBirthdayCake/>
                  <Field id="dataNascimento" name="dataNascimento" placeholder="Data de Nascimento" type="text" />
                </div>
              </div>
              <div className='buttonDiv'>
                <button type="submit"><MdOutlineAddTask /></button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default CadastrarPessoa;
