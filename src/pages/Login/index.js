import { useEffect, useContext, useState } from "react";
import Logo from "../../assets/logo.webp";
import { MyContext } from "../../App";
import pattern from "../../assets/loginbK.webp";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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

          <div className="wrapper mt-3 card border ">
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
                className={`form-group  position-relative ${
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

              <div className="form-group mt-2">
                <Button className="btn-blue btn-lg w-100 btn-big  ">
                  Sign In
                </Button>
              </div>
              <div className="form-group text-center mb-0">
                <Link
                  to={"/forgot-password"}
                  className="text-center link d-block"
                >
                  FORGOT PASSWORD?
                </Link>
                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                  <span className="line"></span>
                  <span className="txt">or</span>
                  <span className="line"></span>
                </div>
                {/* login with different different way  */}
                <div className="logolignSec text-center d-block">
                  <Button style={{ borderColor: "#DB4437", color: "#DB4437" }}>
                    <div className="icon-wrapper">
                      <FcGoogle size={24} />
                    </div>
                  </Button>
                  <Button style={{ borderColor: "#0077B5", color: "#0077B5" }}>
                    <div className="icon-wrapper">
                      <FaLinkedin size={24} />
                    </div>
                  </Button>
                  <Button style={{ borderColor: "#25D366", color: "#25D366" }}>
                    <div className="icon-wrapper">
                      <MdPhone size={24} />
                    </div>
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="wrapper  mt-3 card border footer p-3">
            <span className="text-center">
              Don't have an account?{" "}
              <Link to={"/signUp"} className="link color ml-2">
                Register
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
