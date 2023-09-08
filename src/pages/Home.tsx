import { useQuery } from 'react-query';

import { BookList } from '@/components/BookList';
import { BooksService } from '@/utils/api/BooksService';

export const Home = () => {
  const { isLoading, isError, data } = useQuery('getBooks', () => BooksService.getBooks('js'));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className='container'>
      <span className='quantity'>Found {data?.totalItems} results</span>
      {data && <BookList books={data?.items} />}
    </div>
  );
};
