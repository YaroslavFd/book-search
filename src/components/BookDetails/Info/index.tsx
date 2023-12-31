import { BookDetailsProps } from '..';

import styles from './styles.module.scss';

export const Info = ({ categories, authors, description, link, title }: BookDetailsProps) => {
  const descrContent = description ? (
    <div dangerouslySetInnerHTML={{ __html: description }} className={styles.descr} />
  ) : (
    <div className={styles.descr}>There is no description of the book</div>
  );

  return (
    <div className={styles.wrapper}>
      {categories ? (
        <div className={styles.categories}>{categories.join(', ')}</div>
      ) : (
        <div className={styles.categories}>There are no categories</div>
      )}
      <h2>{title}</h2>
      {authors ? <span>{authors.join(', ')}</span> : <span>Author not found</span>}
      {descrContent}

      <a className={styles.btnLink} href={link} target='_blank'>
        Open in Google Books
      </a>
    </div>
  );
};
