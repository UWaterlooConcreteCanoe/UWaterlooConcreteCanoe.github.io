import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import Join from './pages/Join-archived';
import PastCanoes from './pages/PastCanoes';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Subteams from './pages/Subteams';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'sponsors',
        element: <Sponsors />,
      },
      {
        path: 'past-canoes',
        element: <PastCanoes />,
      },
      {
        path: 'join-us',
        element: <Join/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'media',
        element: <Media/>,
      },
      {
        path: 'subteams',
        element: <Subteams/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
