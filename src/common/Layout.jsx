import { Outlet, useNavigate } from "react-router-dom"
import Header from "../component/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Footer from "../component/Footer";

const Layout = () => {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.loginSlice.isLogin);
  useEffect(() => {
    !loginState && navigate("/login");
  }, [loginState]);

  return (
    <div className="wrap">
      <Header />
      <div className="content-wrap">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;