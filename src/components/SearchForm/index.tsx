import React from 'react';

import searchParams from '@/store/searchParams';
import { CATEGORIES_OPTIONS, SORTING_OPTIONS } from '@/utils/constants';
import { Select } from '../Select';

import styles from './styles.module.scss';

export const SearchForm = () => {
  const [value, setValue] = React.useState('');
  const [category, setCategory] = React.useState<CategoryType>('all');
  const [orderBy, setOrderBy] = React.useState<OrderByType>('relevance');

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() !== '') {
      searchParams.setSearchValue(value);
      searchParams.setSearchOptions(category, orderBy);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input value={value} onChange={onChangeValue} type='text' placeholder='Type to search...' />
        <button type='submit'>
          <img src='/search.svg' alt='search icon' />
        </button>
      </div>
      <div className={styles.selectBox}>
        <Select
          label='Categories'
          name='categories'
          defaultValue={category}
          options={CATEGORIES_OPTIONS}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCategory(e.target.value as CategoryType)
          }
        />
        <Select
          label='Sorting by'
          name='sorting'
          defaultValue={orderBy}
          options={SORTING_OPTIONS}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setOrderBy(e.target.value as OrderByType)
          }
        />
      </div>
    </form>
  );
};
