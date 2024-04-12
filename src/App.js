import Home from './pages/Home';
import Error from './components/Error';
import About from './components/About';
import Experience from './components/Experience';
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
]);

export default appRouter;
