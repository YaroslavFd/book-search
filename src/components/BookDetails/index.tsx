import { Link } from 'react-router-dom';

import { Info } from './Info';

import styles from './styles.module.scss';

export interface BookDetailsProps {
  title: string;
  categories: Array<string> | undefined;
  authors: Array<string>;
  description: string | undefined;
  link: string;
  img?: string | undefined;
}

export const BookDetails = ({
  title,
  categories,
  authors,
  description,
  link,
  img
}: BookDetailsProps) => {
  return (
    <>
      <Link className={styles.btnBack} to='/books'>
        Back
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={img ? img : '/book-mockup.jpg'} alt={title} />
        </div>
        <Info
          categories={categories}
          authors={authors}
          description={description}
          title={title}
          link={link}
        />
      </div>
    </>
  );
};
