import { useParams } from 'react-router-dom';

import { useFetchBook } from '@/utils/hooks/useFetchBook';
import { BookDetails } from '@/components/BookDetails';
import { Spinner } from '@/components/UI/Spinner';

export const BookPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useFetchBook(String(id));

  if (isLoading) {
    return (
      <div className='page-status'>
        <Spinner />
      </div>
    );
  }

  if (isError || !data) {
    return <div className='page-status'>Oops! Something went wrong :/</div>;
  }

  return (
    <BookDetails
      title={data?.volumeInfo.title}
      categories={data?.volumeInfo.categories}
      authors={data?.volumeInfo.authors}
      description={data?.volumeInfo.description}
      img={data?.volumeInfo.imageLinks?.thumbnail}
    />
  );
};
