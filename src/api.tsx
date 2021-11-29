import axios from 'axios'

const ApiPessoa = axios.create({
  baseURL: 'https://my-application-teste.herokuapp.com',
});

const ApiCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export { ApiPessoa, ApiCep};
