import { SearchForm } from '../SearchForm';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>Search for books</h1>
        <SearchForm />
      </div>
    </header>
  );
};
