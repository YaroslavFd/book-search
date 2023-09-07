import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { BookPage } from '@/pages/BookPage';
import { Layout } from '@/pages/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'book/:id',
        element: <BookPage />
      }
    ]
  }
]);
