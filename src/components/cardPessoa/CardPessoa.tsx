import React from "react";
import styles from './CardPessoa.module.css'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PessoaContext } from "../../context/PessoaContext";

const CardPessoa: React.FC<any> = ({values, DeletarPessoa}) => {
  

  const { navigate } = useContext<any>(AuthContext);
  const { setPessoaAEditar} = useContext<any>(PessoaContext);

  const EditarPessoa = () => {
    setPessoaAEditar(values);
    navigate('/editarpessoa');
    // console.log(values)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.nome}><strong>Nome:</strong> {values.nome}</p>
        <p className={styles.nome}><strong>E-mail:</strong> {values.email}</p>
        <p className={styles.nome}><strong>CPF:</strong> {values.cpf}</p>
        <p className={styles.nome}><strong>Data de Nascimento:</strong> {values.dataNascimento}</p>
        <button onClick={()=>DeletarPessoa(values.idPessoa)}>Apagar</button>
        <button onClick={EditarPessoa}>Editar</button>
      </div>
    </div>
  )
}

export default CardPessoa;
