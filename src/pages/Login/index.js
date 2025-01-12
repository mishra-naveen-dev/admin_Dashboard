import { useEffect, useContext, useState } from "react";
import Logo from "../../assets/logo.webp";
import { MyContext } from "../../App";
import pattern from "../../assets/loginbK.webp";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Button from "@mui/material/Button";

import "./login.css";
const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  return (
    <>
      <img src={pattern} alt="" className="loginPattern" />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={Logo} width="80px" alt="" />
            <h5 className="font-weight-bold">LOGIN TO RAJWADASTORE</h5>
          </div>
          <div className="wrapper card mt-3 border ">
            <form>
              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>

                <input
                  type="text"
                  className="form-control "
                  placeholder="enter your email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                />
              </div>
              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <MdLock />
                </span>

                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  className="form-control "
                  placeholder="enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => focusInput(1)}
                  onBlur={() => setInputIndex(null)}
                />
                <span
                  className="toggleShowPassword"
                  onClick={() => setShowPassword(!isShowPassword)}
                >
                  {isShowPassword === true ? (
                    <BsFillEyeSlashFill />
                  ) : (
                    <BsEyeFill />
                  )}
                </span>
              </div>

              <div className="form-group">
                <Button className="btn-blue btn-lg w-100 btn-big ">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
