import { BookCard } from './BookCard';
import styles from './styles.module.scss';

export const BookList = () => {
  return (
    <div className={styles.wrapper}>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};
