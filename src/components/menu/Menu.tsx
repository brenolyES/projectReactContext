import styles from './Menu.module.css'
import {Link} from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Menu = () => {

  const {auth, handleLogout, activeLink} = useContext<any>(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {activeLink === '/' ? <Link className={styles.active} to='/'>Inicio</Link> : <Link to='/'>Inicio</Link>}
        </li>
        <li>
          {activeLink === '/login' ? <Link className={styles.active} to='/login'>Entrar</Link> : <Link to='/login'>Entrar</Link>}
        </li>
        <li>
        {activeLink === '/pessoa' ? <Link className={styles.active} to='/pessoa'>Pessoa</Link> : <Link to='/pessoa'>Pessoa</Link>}
          
        </li>
        {auth && <li><button className={styles.sair} onClick={handleLogout}>Sair</button></li>}
      </ul>
    </nav>
  )
}

export default Menu;
