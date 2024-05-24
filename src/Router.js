// import { Navigate } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import MainPage from "./pages/MainPage";
// import CheckboxPage from "./pages/CheckboxPage";
// // import { useSelector } from "react-redux";

// // const loginState = useSelector((state) => state.loginSlice.isLogin);

// const routerData = [
//   // {
//   //   path: "/",
//   //   element: <Layout />,
//   //   children: [

//   //   ],
//   // },
//   {
//     id: 0,
//     path: "/",
//     element: loginState ? <Navigate to="/main" replace /> : <LoginPage />,
//   },
//   {
//     id: 1,
//     path: "/login",
//     element: <LoginPage />,
//     withAuth: false,
//   },
//   {
//     id: 2,
//     path: "/main",
//     element: <MainPage />,
//     withAuth: true,
//   },
//   {
//     id: 3,
//     path: "/checkbox",
//     element: <CheckboxPage />,
//     withAuth: true,
//   },
//   {
//     id: 99,
//     path: "*",
//     element: <div>not found</div>,
//   },
// ];

// export default routerData;