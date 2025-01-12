import React, { useEffect, useContext, useState } from "react";
import Logo from "../../assets/logo.webp";
import { MyContext } from "../../App";
import pattern from "../../assets/loginbK.webp";
import { MdEmail, MdLock, MdPhone } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <img src={pattern} alt="" className="loginPattern loginPatternSingUp " />
      <section className="loginSection signUpSection">
        {/* part 1 */}
        <div className="row">
          <div className="col-md-8"></div>

          {/* part2 */}
          <div className="col-md-4 pr-0">
            <div className="loginBox">
              <div className="logo text-center">
                <img src={Logo} width="80px" alt="" />
                <h5 className="font-weight-bold">Register to New Account</h5>
              </div>

              <div className="wrapper mt-3 card border ">
                <form>
                  {/* name */}
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 0 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <RiAccountPinCircleFill />
                    </span>

                    <input
                      type="name"
                      className="form-control "
                      placeholder="enter your name"
                      onFocus={() => focusInput(0)}
                      onBlur={() => setInputIndex(null)}
                    />
                  </div>
                  {/* email */}
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 1 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdEmail />
                    </span>

                    <input
                      type="text"
                      className="form-control "
                      placeholder="enter your email"
                      onFocus={() => focusInput(1)}
                      onBlur={() => setInputIndex(null)}
                    />
                  </div>
                  {/* password */}
                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 3 && "focus"
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
                      onFocus={() => focusInput(3)}
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
                  {/* phone number */}
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 4 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdPhone />
                    </span>

                    <input
                      type="number"
                      className="form-control "
                      placeholder="enter your phone number"
                      onFocus={() => focusInput(4)}
                      onBlur={() => setInputIndex(null)}
                    />
                  </div>
                  {/* confirm password */}
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 5 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <IoShieldCheckmarkSharp />
                    </span>

                    <input
                      type="password"
                      className="form-control "
                      placeholder="confirm your password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      onFocus={() => focusInput(5)}
                      onBlur={() => setInputIndex(null)}
                    />
                    {!passwordMatch && (
                      <small className="text-danger">
                        Passwords do not match
                      </small>
                    )}
                  </div>

                  
                  <div className="form-group text-center mb-0">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsCheckbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="termsCheckbox"
                      >
                        I agree to all terms & conditions
                      </label>
                    </div>
                    <div className="form-group mt-2">
                    <Button
                      className="btn-blue btn-lg w-100 btn-big"
                      disabled={!isChecked}
                    >
                      Sign Up
                    </Button>
                  </div>
                    <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                      <span className="line"></span>
                      <span className="txt">or</span>
                      <span className="line"></span>
                    </div>
                    {/* login with different different way  */}
                    <div className="logolignSec text-center d-block">
                      <Button
                      
                        style={{ borderColor: "#DB4437", color: "#DB4437" }}
                      >
                        <div className="icon-wrapper">
                          <FcGoogle size={24} />
                        </div>
                      </Button>
                      <Button
                        style={{ borderColor: "#0077B5", color: "#0077B5" }}
                      >
                        <div className="icon-wrapper">
                          <FaLinkedin size={24} />
                        </div>
                      </Button>
                      <Button
                        style={{ borderColor: "#25D366", color: "#25D366" }}
                      >
                        <div className="icon-wrapper">
                          <MdPhone size={24} />
                        </div>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="wrapper mt-3 card border footer p-3">
                <span className="text-center">
                  Already have an account?{" "}
                  <Link to={"/login"} className="link color ml-2">
                    Login
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
