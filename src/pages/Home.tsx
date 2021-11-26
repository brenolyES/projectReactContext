import React from 'react'
import imgPessoas from '../images/logo-react.png'
import { useNavigate } from 'react-router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {

  const navigate =useNavigate();
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
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis distinctio nisi laborum, sed modi officia perferendis. Recusandae quam amet id reprehenderit fugiat! Animi magni quasi delectus, ratione reiciendis aliquam minima voluptates nulla temporibus, aspernatur numquam perspiciatis cupiditate at earum.</p>
            </div>
            <button onClick={() => navigate('/login')}>Começar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
