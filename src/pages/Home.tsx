import { BookList } from '@/components/BookList';

export const Home = () => {
  return (
    <div className='container'>
      <span className='quantity'>Found 446 results</span>
      <BookList />
    </div>
  );
};
