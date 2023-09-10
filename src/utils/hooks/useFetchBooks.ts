import { useQuery } from 'react-query';

import { BooksService } from '@/utils/api/BooksService';

export const useFetchBooks = (searchValue: string, searchOptions: SearchOptions) => {
  return useQuery(
    ['getBooks', searchValue, searchOptions],
    () => {
      if (!searchValue) {
        return {} as ResponseFetchBooks;
      }

      return BooksService.getBooks(searchValue, searchOptions.category, searchOptions.orderBy);
    },
    {
      enabled: !!searchValue,
      cacheTime: 30000
    }
  );
};
