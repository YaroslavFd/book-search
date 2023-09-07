import { BookCard } from './BookCard';

import styles from './styles.module.scss';

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <div className={styles.wrapper}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.volumeInfo.title}
          categories={book.volumeInfo.categories}
          authors={book.volumeInfo.authors}
          img={book.volumeInfo.imageLinks?.thumbnail}
        />
      ))}
    </div>
  );
};
