import imgPessoas from '../images/logo-react.png'
import { useNavigate } from 'react-router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {

  const navigate = useNavigate();
  const {setActiveLink} = useContext<any>(AuthContext);

  useEffect(()=>{
    setActiveLink('/');
  },[])

  return (
    <div className='container'>
      <div className='contentHome'>
        <div className='home'>
          <div className='left'>
            <img src={imgPessoas} alt="imgPessoad" width='400px' />
          </div>
          <div className='rigth'>
            <h1>Conheça o projeto</h1>
            <div>
              <p>O projeto é fazer uma página que possua uma autenticação (Login), utilizando a API disponivel através do link <a style={{color:'#82e5ff'}} href="https://my-application-teste.herokuapp.com/swagger-ui/#/" target='_blanck'> https://my-application-teste.herokuapp.com/swagger-ui/#/</a> e contemplar todos os verbos de um CRUD (Create, Read, Update e Delete).</p>
            </div>
            <button onClick={() => navigate('/login')}>Começar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
