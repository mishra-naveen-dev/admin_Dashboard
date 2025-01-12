import React, { createContext, useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/SideBar/SideBar.css";
import "./pages/Dashboard/dashboard.css";
import "./pages/Login/login.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/SideBar"));
const Login = lazy(() => import("./pages/Login"));

const MyContext = createContext();

function App() {
  //
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  //
  const [isLogin, setIsLogin] = useState(false);
  //
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
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
              className={`contentWrapper ${isHideSidebarAndHeader===true && 'full'}  ${
                isToggleSidebar === true ? "toggle" : ""
              }`}
            >
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/login" exact={true} element={<Login />} />
              </Routes>
            </div>
          </div>
        </Suspense>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
