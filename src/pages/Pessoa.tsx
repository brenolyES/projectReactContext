import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext'
import { PessoaContext } from '../context/PessoaContext';
import { ApiPessoa } from '../api';
import CardPessoa from '../components/cardPessoa/CardPessoa';
import { IoMdPersonAdd } from 'react-icons/io';

const Pessoa = () => {

  const { setActiveLink, navigate } = useContext<any>(AuthContext);
  const { listPessoas, setListPessoas } = useContext(PessoaContext);
  

  const DeletarPessoa = async (id: number) => {
    await ApiPessoa.delete(`/pessoa/${id}`);
    AtualizarLista();
  }

  const AtualizarLista = async () => {
    const { data } = await ApiPessoa.get('/pessoa');
    setListPessoas(data);
  }

  useEffect(() => {
    setActiveLink('/pessoa');
    AtualizarLista();
  }, [])


  return (
    <div className='container'>
      <div className='contentPessoa'>
        <div className='body'>
          <h1>Lista de Pessoas</h1>
          {
            listPessoas.map(values => (
              <CardPessoa key={values.idPessoa} DeletarPessoa={DeletarPessoa} values={values} />
            ))
          }
          <div className='cadastrarPessoa'>
            <button onClick={() => navigate('/cadastrar')}><IoMdPersonAdd /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pessoa;
