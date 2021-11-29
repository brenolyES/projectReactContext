import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Pessoa from './pages/Pessoa';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { AuthProvider } from './context/AuthContext'
import { PessoaProvider } from "./context/PessoaContext";
import { CepProvider } from './context/CepContext';
import Home from "./pages/Home";
import CadastrarPessoa from "./pages/CadastrarPessoa";
import EditarPessoa from "./pages/EditarPessoa";
import NotFound from './components/notFound/NotFound';
import Endereco from './pages/Endereco';


const Routers = () => {

  const [isLogin, setIsLogin] = useState<any>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PessoaProvider>
            <CepProvider>
              <Header />
              {
                isLogin ? (
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/pessoa' element={<Pessoa />} />
                    <Route path='/cadastrar' element={<CadastrarPessoa />} />
                    <Route path='/editarpessoa' element={<EditarPessoa />} />
                    <Route path='/endereco' element={<Endereco />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                ) : (
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                )
              }
              <Footer />
            </CepProvider>
          </PessoaProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default Routers;
