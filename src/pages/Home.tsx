import { useQuery } from 'react-query';

import { BookList } from '@/components/BookList';
import { fetchBooks } from '@/utils/api';

export const Home = () => {
  const { isLoading, isError, data } = useQuery('getBooks', () => fetchBooks('js'));

  console.log(data);

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
