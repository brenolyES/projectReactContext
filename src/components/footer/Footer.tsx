import React from 'react'
import styles from './Footer.module.css'
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <strong><BiCopyright/>Todos os direitos reservados - by Brenoly Porto</strong>
      </div>
    </div>
  )
}

export default Footer;
