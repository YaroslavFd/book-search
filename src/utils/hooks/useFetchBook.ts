import { useQuery } from 'react-query';

import { BooksService } from '@/utils/api/BooksService';

export const useFetchBook = (id: string) => {
  return useQuery('getBook', () => BooksService.getBook(id), {
    cacheTime: 0
  });
};
