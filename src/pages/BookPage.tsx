import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { BookDetails } from '@/components/BookDetails';
import { BooksService } from '@/utils/api/BooksService';

export const BookPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery('getBook', () => BooksService.getBook(String(id)));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error</div>;
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
