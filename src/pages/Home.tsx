import { useQuery } from 'react-query';
import { observer } from 'mobx-react-lite';

import searchParams from '@/store/searchParams';
import { BooksService } from '@/utils/api/BooksService';
import { BookList } from '@/components/BookList';
import { Button } from '@/components/UI/Button';
import { Spinner } from '@/components/UI/Spinner';

export const Home = observer(() => {
  const { searchValue, searchOptions } = searchParams;

  const { isLoading, isError, data } = useQuery(
    ['getBooks', searchValue, searchOptions],
    () => {
      if (!searchValue) {
        return {} as ResponseFetchBooks;
      }

      return BooksService.getBooks(searchValue, searchOptions.category, searchOptions.orderBy);
    },
    {
      enabled: !!searchValue
    }
  );

  const pageStatusMessage = !searchValue ? (
    'Use the search'
  ) : isLoading ? (
    <Spinner />
  ) : isError ? (
    'Oops! Something went wrong :/'
  ) : null;

  return (
    <div className='container'>
      {pageStatusMessage && <div className='page-status'>{pageStatusMessage}</div>}
      {data && (
        <div>
          <span className='quantity'>Found {data.totalItems} results</span>
          <BookList books={data.items} />
          {data.items.length < data.totalItems && <Button className='load-more'>Load more</Button>}
        </div>
      )}
    </div>
  );
});
