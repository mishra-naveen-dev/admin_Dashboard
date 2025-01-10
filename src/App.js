import React, { createContext, useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/SideBar/SideBar.css";
import "./pages/Dashboard/dashboard.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/SideBar"));

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <div className="main d-flex">
            <div
              className={`sidebarWrapper ${
                isToggleSidebar === true ? "toggle" : ""
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`contentWrapper ${
                isToggleSidebar === true ? "toggle" : ""
              }`}
            >
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
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
