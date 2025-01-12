import { useEffect, useContext } from "react";
import Logo from "../../assets/logo.webp";
import { MyContext } from "../../App";
import pattern  from "../../assets/loginbK.webp";
import "./login.css";
const Login = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, []);
  return (
    <>
      <img src={pattern} alt="" className="loginPattern" />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={Logo} width="80px" alt="" />
            <h5 className="font-weight-bold">LOGIN TO RAJWADASTORE</h5>
          </div>
          <div className="wrapper card mt-3 border p-3">

          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
