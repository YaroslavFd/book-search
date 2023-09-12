import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { BookPage } from '@/pages/BookPage';
import { Layout } from '@/pages/Layout';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Navigate to='/books' replace />
      },
      {
        path: '/books',
        element: <Home />
      },
      {
        path: 'book/:id',
        element: <BookPage />
      }
    ]
  }
]);
