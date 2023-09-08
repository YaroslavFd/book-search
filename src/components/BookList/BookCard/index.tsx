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
    <Link to={`book/${id}`}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img
            src={img ? img : '/book-mockup.png'}
            alt={title}
            style={!img ? { boxShadow: 'none' } : {}}
          />
        </div>
        <div className={styles.info}>
          {categories && <span className={styles.category}>{categories[0]}</span>}
          <h3>{title}</h3>
          {authors && <span>{authors.join(', ')}</span>}
        </div>
      </div>
    </Link>
  );
};
