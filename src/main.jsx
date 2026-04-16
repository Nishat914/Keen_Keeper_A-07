import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import MainLayout from './component/MainLayout';
import HomePage from './component/HomePage';
import Timeline from './component/Timeline';
import Stats from './component/Stats';
import ErrorPage from './component/ErrorPage';
import FriendDetails from './component/FriendDetails';

import FriendContextProvider from './component/FriendContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component : MainLayout ,
    children: [
      { 
        index: true, 
        Component: HomePage 
      },
      { 
        path: "/timeline", 
        Component: Timeline 
      },
      { 
        path: "/stats", 
        Component: Stats 
      },
      {
            path: "/friendDetails/:id", 
            Component: FriendDetails
          }
    ],
    errorElement : <ErrorPage/> 
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContextProvider>
        <RouterProvider router={router} />
    
    </FriendContextProvider>
   
  </StrictMode>,
)
