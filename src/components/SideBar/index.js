import Button from "@mui/material/Button";

//icon
import { RiDashboardFill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";



const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Button className="w-100">
              <span className="icon"><RiDashboardFill /></span>Dashboard
              <span className="arrow"><MdArrowForwardIos /></span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
