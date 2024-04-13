import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Body } from './components/Body';
import Error from './components/Error';
import About from './components/About';
import Experience from './components/Experience';
import FixedNavBar from './components/FixedNavBar';

const AppLayout = () => {
  return (
    <React.Fragment>
      <FixedNavBar/>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
export default AppLayout;
