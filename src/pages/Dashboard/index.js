import "./dashboard.css";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoBagCheck } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import DashboardBox from "./components/dashboardBox";
const Dashboard = () => {
  return (
    <>
      {/* <h4>Dashboard Page</h4> */}
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<HiOutlineShoppingCart />}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<IoBagCheck />}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<GrStar />}
                grow={true}
              />
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
