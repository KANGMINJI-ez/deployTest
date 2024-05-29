import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { logout } from "../store/slices/loginSlice";

const Header = () => {
  const location = useLocation();
  const userId = useSelector((state) => state.loginSlice.id);
  const isLogin = useSelector((state) => state.loginSlice.isLogin);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  
  const nodeRef = useRef(null);
  
  const dispatch = useDispatch();

  const handleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
    
  }

  useEffect(() => {
    setIsMenuOpened(false)
  }, [location]);

  return (
    !location.pathname.includes("login") && (
      <header>
        <div className="inner">
          <h1>
            <Link to={"/main"}>HEADER</Link>
          </h1>
          <div className="utils">
            <div className="id">{userId}</div>
            <button 
              className="menu-open" 
              onClick={handleMenu}
            >
              Menu
            </button>
            {isLogin && (
              <button 
                className="logout"
                onClick={handleLogout}
              >
                Logout
              </button>
              )
            }
            <CSSTransition
              in={isMenuOpened}
              timeout={300}
              nodeRef={nodeRef}
              classNames="header-menu"
              unmountOnExit
            >
              <div className="menu-wrap" ref={nodeRef}>
                <div className="menu">
                  <button className="close" onClick={handleMenu}>
                    X
                  </button>
                  <ul>
                    <li>
                      <NavLink to="/form">form</NavLink>
                    </li>
                    <li>
                      <NavLink to="/accordion">accordion</NavLink>
                    </li>
                    <li>
                      <NavLink to="/tooltip">tooltip</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;