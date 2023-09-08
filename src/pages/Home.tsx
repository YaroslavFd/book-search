import { useQuery } from 'react-query';

import searchParams from '@/store/searchParams';
import { BookList } from '@/components/BookList';
import { BooksService } from '@/utils/api/BooksService';
import { observer } from 'mobx-react-lite';

export const Home = observer(() => {
  const { searchValue, searchOptions } = searchParams;

  const { isLoading, isError, data } = useQuery(
    ['getBooks', searchValue, searchOptions],
    () => {
      if (!searchValue) {
        return {} as ResponseFetchBooks;
      }

      return BooksService.getBooks(searchValue, searchOptions.category, searchOptions.orderBy, 10);
    },
    {
      enabled: !!searchValue
    }
  );

  if (!searchValue) {
    return <div className='empty-list'>Use the search</div>;
  }

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
});
