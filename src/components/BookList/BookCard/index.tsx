import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface BookCardProps {
  id: string;
  title: string;
  categories: Array<string> | undefined;
  authors: Array<string>;
  img: string | undefined;
}

export const BookCard = ({ id, title, categories, authors, img }: BookCardProps) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/book/${id}`}>
        <div className={styles.image}>
          <img src={img ? img : '/book-mockup.jpg'} alt={title} />
        </div>
      </Link>
      <div className={styles.info}>
        {categories && <span className={styles.category}>{categories[0]}</span>}
        <Link to={`/book/${id}`}>
          <h3>{title}</h3>
        </Link>
        {authors && <span>{authors.join(', ')}</span>}
      </div>
    </div>
  );
};
