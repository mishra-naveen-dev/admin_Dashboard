import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import Button from "@mui/material/Button";
// import { MdOutlineMenuOpen } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* logo wraooer */}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="402" />
                <span className="ml-2">RAJWADASTORE</span>
              </Link>
            </div>
            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle">
                <AiOutlineMenuFold />
                {/* <AiOutlineMenuUnfold /> */}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
