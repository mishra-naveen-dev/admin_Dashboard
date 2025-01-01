import Button from "@mui/material/Button";

//icon
import { RiDashboardFill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { FaFileInvoice } from "react-icons/fa";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Button className="w-100">
              <span className="icon">
                <RiDashboardFill />
              </span>
              Dashboard
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <BsFillBox2HeartFill />
              </span>
              Products
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <TbTruckDelivery />
              </span>
              Orders
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <FaFileInvoice />
              </span>
              Invoices
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <SiGooglemessages />
              </span>
              Messages
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <MdNotifications />
              </span>
              Notification
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <IoMdSettings />
              </span>
              Settings
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
