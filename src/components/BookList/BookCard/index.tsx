import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const BookCard = () => {
  return (
    <Link to='book/1'>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src='/book.jpg' alt='book' />
        </div>
        <div className={styles.info}>
          <span className={styles.category}>Computers</span>
          <h3>Node.js Разработка серверных веб-приложений на JavaScript</h3>
          <span>Дэвид Хэрсон</span>
        </div>
      </div>
    </Link>
  );
};
