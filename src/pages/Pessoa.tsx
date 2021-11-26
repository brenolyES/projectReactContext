import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext'
import api from '../api';

const Pessoa = () => {

  const { auth, setActiveLink } = useContext<any>(AuthContext);

  useEffect(() => {
    setActiveLink('/pessoa');
    (async()=>{
      const { data } = await api.get('/pessoa');
      console.log(data);
    })()
  },[])

  return (
    <div className='container'>
      <div className='contentPessoa'>
        {auth ?
        <h1>Usuario Logado</h1>
        : 
        <h1>Voce precisa estar logado no sistema</h1>
        }
      </div>
    </div>
  )
}

export default Pessoa;
