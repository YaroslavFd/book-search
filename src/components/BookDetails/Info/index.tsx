import { BookDetailsProps } from '..';

import styles from './styles.module.scss';

export const Info = ({ categories, authors, description, title }: BookDetailsProps) => {
  return (
    <div className={styles.wrapper}>
      {categories ? (
        <div className={styles.categories}>{categories.join(', ')}</div>
      ) : (
        <div className={styles.categories}>There are no categories</div>
      )}
      <h2>{title}</h2>
      {authors ? <span>{authors.join(', ')}</span> : <span>Author not found</span>}
      <div className={styles.descr}>
        {description ? description : 'There is no description of the book'}
      </div>
    </div>
  );
};
