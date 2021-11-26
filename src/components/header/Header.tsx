import Menu from '../menu/Menu';
import styles from './Header.module.css'
import { SiPolymerproject } from 'react-icons/si';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <header className='container'>
        <div className={styles.left}>
          <Link to='/'>
            <SiPolymerproject className={styles.logo} />
          </Link>
          <Link to='/'>
            <strong>Projeto React</strong>
          </Link>
        </div>
        <div>
          <Menu />
        </div>
      </header>
    </div>
  )
}

export default Header;
