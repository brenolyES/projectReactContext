import { useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CepContext } from '../context/CepContext';
import { CepPesquisadoDTO } from "../model/CepDTO"
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { ApiCep } from "../api";

const Endereco = () => {

  const { setActiveLink } = useContext<any>(AuthContext);
  const { jsonCep, setJsonCep } = useContext<any>(CepContext);

  const searchCep = async (cep: string) => {
    const { data } = await ApiCep.get(`/${cep}/json/`);
    setJsonCep(data);
  }

  useEffect(() => {
    setActiveLink('/endereco');
  }, [])

  return (
    <div className='container'>
      <div className='contentEndereco'>
        <Formik
          initialValues={{
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            localidade: '',
            uf: '',
            ibge: '',
            gia: '',
            ddd: '',
            siafi: ''
          }}
          onSubmit={async (
            values: CepPesquisadoDTO,
            { setSubmitting }: FormikHelpers<CepPesquisadoDTO>
          ) => {
            // const { data } = await ApiCep.get(`/${values.cep}/json/`);
            setSubmitting(false);
          }}
        >
          {pros => (
            <Form>
              <div>
                <label htmlFor="cep">Pesquisar Cep</label>
                <br />
                <Field id="cep" name="cep" placeholder="cep" maxLength='8' />
                <br />
                <button onClick={() => searchCep(pros.values.cep)}>Pesquisar</button>
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="cep">Cep</label>
                  <Field id="cep" name="cep" placeholder="cep" maxLength='8' value={jsonCep ? jsonCep.cep : null} />
                </div>
                <div>
                  <label htmlFor="cidade">Cidade</label>
                  <Field id="cidade" name="cidade" placeholder="cidade" maxLength='8' value={jsonCep ? jsonCep.localidade : null} />
                </div>
                <div>
                  <label htmlFor="complemento">Complemento</label>
                  <Field id="complemento" name="complemento" placeholder="complemento" maxLength='8' />
                </div>
                <button type="submit">Cadastrar Endereço</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Endereco;