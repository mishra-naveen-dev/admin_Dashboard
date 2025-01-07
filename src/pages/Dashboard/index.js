import "./dashboard.css";

import DashboardBox from "./components/dashboardBox";
const Dashboard = () => {
  return (
    <>
      {/* <h4>Dashboard Page</h4> */}
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#000", "#ccc"]} />
              <DashboardBox />
              <DashboardBox />
              <DashboardBox />
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
