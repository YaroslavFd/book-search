import { Select } from '@/components/Select';
import { CATEGORIES_OPTIONS, SORTING_OPTIONS } from '@/utils/constants';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>Search for books</h1>
        <div className={styles.box}>
          <div className={styles.searchBox}>
            <input type='text' placeholder='Type to search...' />
          </div>
          <div className={styles.selectBox}>
            <Select
              label='Categories'
              name='categories'
              defaultValue='all'
              options={CATEGORIES_OPTIONS}
              onChange={() => console.log('ok')}
            />
            <Select
              label='Sorting by'
              name='sorting'
              defaultValue='relevance'
              options={SORTING_OPTIONS}
              onChange={() => console.log('ok')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
