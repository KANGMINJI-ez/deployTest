import './App.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Layout from './common/Layout';
import { useSelector } from 'react-redux';
import CheckboxPage from './pages/CheckboxPage';
import AccordionPage from './pages/AccordionPage';
import TooltipPage from './pages/TooltipPage';
import FormPage from './pages/FormPage';

function App() {
  const loginState = useSelector((state) => state.loginSlice.isLogin);
  const routerData = [
    // {
    //   path: "/",
    //   element: <Layout />,
    //   children: [

    //   ],
    // },
    {
      id: 0,
      path: "/",
      element: loginState ? <Navigate to="/main" replace /> : <LoginPage />,
    },
    {
      id: 1,
      path: "/login",
      element: <LoginPage />,
      withAuth: false,
    },
    {
      id: 2,
      path: "/main",
      element: <MainPage />,
      withAuth: true,
    },
    {
      id: 3,
      path: "/form",
      element: <FormPage />,
      withAuth: true,
    },
    {
      id: 4,
      path: "/checkbox",
      element: <CheckboxPage />,
      withAuth: true,
    },
    {
      id: 5,
      path: "/accordion",
      element: <AccordionPage />,
      withAuth: true,
    },
    {
      id: 6,
      path: "/tooltip",
      element: <TooltipPage />,
      withAuth: true,
    },
    {
      id: 99,
      path: "*",
      element: <div>not found</div>,
    },
  ];
  const router = createBrowserRouter(
    routerData.map((router) => {
      if (router.withAuth) {
        console.log(router.element);
        return {
          path: router.path,
          element: <Layout/>,
          children: [
            {
              path: router.path,
              element: router.element
            },
          ]
        };
      } else {
        return {
          path: router.path,
          element: router.element,
        }
      }
    })
  );
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
