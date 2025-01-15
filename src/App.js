import React, {
  createContext,
  useState,
  Suspense,
  lazy,
  useEffect,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/SideBar/SideBar.css";
import "./pages/Dashboard/dashboard.css";
import "./pages/Login/login.css";
import "./pages/Product/product.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/SideBar"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

const Footer = lazy(() => import("./components/Footer/Footer"));

const MyContext = createContext();

function App() {
  //
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  //
  const [isLogin, setIsLogin] = useState(false);
  //
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  //
  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);
  //
  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Suspense fallback={<div>Loading...</div>}>
          {isHideSidebarAndHeader !== true && <Header />}

          <div className="main d-flex">
            {isHideSidebarAndHeader !== true && (
              <div
                className={`sidebarWrapper ${
                  isToggleSidebar === true ? "toggle" : ""
                }`}
              >
                <Sidebar />
              </div>
            )}

            <div
              className={`contentWrapper ${
                isHideSidebarAndHeader === true && "full"
              }  ${isToggleSidebar === true ? "toggle" : ""}`}
            >
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/login" exact={true} element={<Login />} />
                <Route path="/signUp" exact={true} element={<SignUp />} />
                <Route path="/product" exact={true} element={<Product />} />
                <Route
                  path="/product/details"
                  exact={true}
                  element={<ProductDetails />}
                />
              </Routes>
              <Footer />
            </div>
          </div>
        </Suspense>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
