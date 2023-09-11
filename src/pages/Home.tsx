import { observer } from 'mobx-react-lite';

import searchParams from '@/store/searchParams';
import { useFetchBooks } from '@/utils/hooks/useFetchBooks';
import { BookList } from '@/components/BookList';
import { Button } from '@/components/UI/Button';
import { Spinner } from '@/components/UI/Spinner';

export const Home = observer(() => {
  const { searchValue, searchOptions } = searchParams;

  const { isLoading, isError, data } = useFetchBooks(searchValue, searchOptions);

  const pageStatusMessage = !searchValue ? (
    'Use the search!'
  ) : isLoading ? (
    <Spinner />
  ) : isError ? (
    'Oops! Something went wrong :/'
  ) : !data?.totalItems ? (
    'Nothing found'
  ) : null;

  return (
    <div className='container'>
      {pageStatusMessage && <div className='page-status'>{pageStatusMessage}</div>}
      {data && !!data.totalItems && (
        <div>
          <span className='quantity'>Found {data.totalItems} results</span>
          <BookList books={data.items} />
          {data.items.length < data.totalItems && <Button className='load-more'>Load more</Button>}
        </div>
      )}
    </div>
  );
});
