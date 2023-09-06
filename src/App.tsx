import { Header } from '@/components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <main className='content'>
        <div className='container'>
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
        </div>
      </main>
    </>
  );
};
