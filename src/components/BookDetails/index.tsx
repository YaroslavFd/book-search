import styles from './styles.module.scss';

export const BookDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src='/book.jpg' alt='book' />
      </div>
      <div className={styles.info}>
        <div className={styles.categories}>Art / General</div>
        <h2>Node.js Разработка серверных веб-приложений на JavaScript</h2>
        <span>Дэвид Хэрсон</span>
        <div className={styles.descr}>An open score edition of Bach's Goldberg Variations</div>
      </div>
    </div>
  );
};
