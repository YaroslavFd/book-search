import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='content'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </main>
    </>
  );
};
