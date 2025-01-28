import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Root.jsx';
import './index.css'
import AuthContext from './Pages/AuthContext/AuthContext.jsx';
import PrivatePage from './Pages/PrivatePage/PrivatePage.jsx';

const Add_Craft_Item = lazy(() => import('./Pages/Add_Craft_Item/Add_Craft_Item.jsx'));
const Signin = lazy(() => import('./Pages/Signin/Signin.jsx'));
const All_Art_And_Craft_Items = lazy(() => import('./Pages/All_Art_And_Craft_Items/All_Art_And_Craft_Items.jsx'));
const My_Art_Craft_Lists = lazy(() => import('./Pages/My_Art_Craft_Lists/My_Art_Craft_Lists.jsx'));


const loading =
  < div className='h-screen flex justify-center items-center' >
    <span className="loading loading-spinner text-accent"></span>
  </div >

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/add-craft-items",
        element: (
          <Suspense fallback={loading}>
            <PrivatePage>
              <Add_Craft_Item />
            </PrivatePage>
          </Suspense>
        )
      },
      {
        path: '/all-art-craft-items',
        element: (
          <Suspense fallback={loading}>
            <All_Art_And_Craft_Items />
          </Suspense>
        )
      },
      {
        path: '/my-craft-list',
        element: (
          <Suspense fallback={loading}>
            <PrivatePage>
              <My_Art_Craft_Lists />
            </PrivatePage>
          </Suspense>
        )
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={loading}><Signin /></Suspense>
        )
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>,
)
