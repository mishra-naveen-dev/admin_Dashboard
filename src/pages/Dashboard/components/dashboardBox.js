// Desc: Dashboard Box component

const DashboardBox = (props) => {
  return <div className="dashboardBox" style={{
    backgroundImage:`linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`
  }}>gg</div>;
};
export default DashboardBox;
