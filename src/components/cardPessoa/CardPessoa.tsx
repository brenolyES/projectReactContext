import React from "react";
import styles from './CardPessoa.module.css'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PessoaContext } from "../../context/PessoaContext";
import moment from "moment";
import { AiFillDelete } from 'react-icons/ai';
import { RiEditBoxFill } from 'react-icons/ri';

const CardPessoa: React.FC<any> = ({ values, DeletarPessoa }) => {


  const { navigate } = useContext<any>(AuthContext);
  const { setPessoaAEditar } = useContext<any>(PessoaContext);

  const EditarPessoa = () => {
    setPessoaAEditar(values);
    navigate('/editarpessoa');
    // console.log(values)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <p className={styles.nome}><strong>Nome:</strong> {values.nome}</p>
          <p className={styles.nome}><strong>E-mail:</strong> {values.email}</p>
          <p className={styles.nome}><strong>CPF:</strong> {values.cpf}</p>
          <p className={styles.nome}><strong>Data de Nascimento:</strong> {moment(values.dataNascimento).format('DD/MM/YYYY')}</p>
        </div>
        <div>
          <button onClick={() => DeletarPessoa(values.idPessoa)}><AiFillDelete /></button>
          <button onClick={EditarPessoa}><RiEditBoxFill/></button>
        </div>
      </div>
    </div>
  )
}

export default CardPessoa;
