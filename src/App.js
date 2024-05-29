import './App.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Layout from './common/Layout';
import { useSelector } from 'react-redux';
import AccordionPage from './pages/AccordionPage';
import TooltipPage from './pages/TooltipPage';
import FormPage from './pages/FormPage';

function App() {
  const loginState = useSelector((state) => state.loginSlice.isLogin);
  const routerData = [
    {
      path: "/",
      element: loginState ? <Navigate to="/main" replace /> : <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
      withAuth: false,
    },
    {
      path: "/main",
      element: <MainPage />,
      withAuth: true,
    },
    {
      path: "/form",
      element: <FormPage />,
      withAuth: true,
    },
    {
      path: "/accordion",
      element: <AccordionPage />,
      withAuth: true,
    },
    {
      path: "/tooltip",
      element: <TooltipPage />,
      withAuth: true,
    },
    {
      path: "*",
      element: <div>not found</div>,
    },
  ];
  const router = createBrowserRouter(
    routerData.map((router) => {
      if (router.withAuth) {
        // console.log(router.element);
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
