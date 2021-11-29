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
import Home from "./pages/Home";
import CadastrarPessoa from "./pages/CadastrarPessoa";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PessoaProvider>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/pessoa' element={<Pessoa />} />
              <Route path='/cadastrar' element={<CadastrarPessoa />} />
            </Routes>
            <Footer />
          </PessoaProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default Routers;
