import React, { createContext } from "react";
import { useState, useEffect} from 'react';
import {ApiPessoa} from '../api'
import {LoginDTO} from '../model/LoginDTO'
import { useNavigate } from "react-router";

const AuthContext = createContext({});

const AuthProvider: React.FC<any> = ({ children }) => {

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      ApiPessoa.defaults.headers.common['Authorization'] = token;
      setAuth(true);
    }
    setLoading(false);
  },[])

  const handleLogin = async (user: LoginDTO) => {
    const { data } = await ApiPessoa.post('/auth', user);
    localStorage.setItem('token', data);
    ApiPessoa.defaults.headers.common['Authorization'] = data;
    setAuth(true);
    // navigate('/pessoa');
    window.location.href = '/pessoa';
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    ApiPessoa.defaults.headers.common['Authorization'] = '';
    window.location.href = '/';
    setAuth(false);
  }

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/');
  

  if(loading){
    return(
      <h1>Loading</h1>
    );
  }


  return (
    <AuthContext.Provider value={
      {auth, handleLogin, handleLogout, 
      activeLink, setActiveLink, navigate}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };