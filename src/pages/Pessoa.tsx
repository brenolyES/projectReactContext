import { useContext, useEffect} from 'react';
import { AuthContext } from '../context/AuthContext'
import { PessoaContext } from '../context/PessoaContext';
import api from '../api';
import CardPessoa from '../components/cardPessoa/CardPessoa';
import { IoMdPersonAdd } from 'react-icons/io';

const Pessoa = () => {

  const { auth, setActiveLink, navigate } = useContext<any>(AuthContext);
  const { listPessoas, setListPessoas} = useContext(PessoaContext);

  const DeletarPessoa = async (id: number) => {
    await api.delete(`/pessoa/${id}`);
    AtualizarLista();
  }

  const AtualizarLista = async () => {
    const { data } = await api.get('/pessoa');
    setListPessoas(data);
  }

  useEffect(() => {
    setActiveLink('/pessoa');
    AtualizarLista();
  },[])


  return (
    <div className='container'>
      <div className='contentPessoa'>
        {auth ?
        <div>
            <h1>Lista de Pessoas</h1>
          {
            listPessoas.map(values => (
              <CardPessoa key={values.idPessoa} DeletarPessoa={DeletarPessoa} values={values}/>
            ))
          }
          <div className='cadastrarPessoa'>
            <button onClick={() => navigate('/cadastrar')}><IoMdPersonAdd/></button>
          </div>
        </div>
        : 
        <h1>Voce precisa estar logado no sistema</h1>
        }
      </div>
    </div>
  )
}

export default Pessoa;
