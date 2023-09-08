import styles from './styles.module.scss';

interface BookDetailsProps {
  title: string;
  categories: Array<string> | undefined;
  authors: Array<string>;
  description: string | undefined;
  img: string | undefined;
}

export const BookDetails = ({ title, categories, authors, description, img }: BookDetailsProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={img ? img : '/book-mockup.jpg'} alt={title} />
      </div>
      <div className={styles.info}>
        {categories ? (
          categories.map((category, i) => (
            <div key={i} className={styles.categories}>
              {category}
            </div>
          ))
        ) : (
          <div className={styles.categories}>There are no categories</div>
        )}
        <h2>{title}</h2>
        {authors ? <span>{authors.join(', ')}</span> : <span>Author not found</span>}
        <div className={styles.descr}>
          {description ? description : 'There is no description of the book'}
        </div>
      </div>
    </div>
  );
};
