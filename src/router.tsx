import { Navigate, createBrowserRouter } from 'react-router-dom';

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
