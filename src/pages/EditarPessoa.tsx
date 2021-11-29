import { useContext } from "react";
import { PessoaContext } from "../context/PessoaContext";
import { PessoaFormikDTO } from "../model/PessoaDTO"
import { Formik, Field, Form, FormikHelpers } from 'formik';
import api from "../api";
import { useNavigate } from "react-router";


const EditarPessoa = () => {

  const {pessoaAEditar} = useContext(PessoaContext);
  console.log(pessoaAEditar);

  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='contentCadastrarPessoa'>
        <h1>Editar</h1>
        <Formik
          initialValues={{
            nome: pessoaAEditar.nome,
            email: pessoaAEditar.email,
            cpf: pessoaAEditar.cpf,
            dataNascimento: pessoaAEditar.dataNascimento
          }}
          onSubmit={async(
            values: PessoaFormikDTO,
            { setSubmitting }: FormikHelpers<PessoaFormikDTO>
            ) => {
              await api.put(`/pessoa/${pessoaAEditar.idPessoa}`, values);
              console.log(values);
              navigate('/pessoa');
              setSubmitting(false);
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
            <button type="submit">Salvar</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default EditarPessoa;
