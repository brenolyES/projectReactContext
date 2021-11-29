import styles from './NotFound.module.css'
import git404 from '../../images/404.gif'

const NotFound = () => {
  return (
    <div className={styles.body}>
      <img src={git404} alt="notfound" />
    </div>
  )
}

export default NotFound;
