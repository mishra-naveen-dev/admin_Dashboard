// Desc: Dashboard Box component
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuTrendingUp, LuTrendingDown } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  const backgroundStyle = Array.isArray(props.color)
    ? `linear-gradient(to right,${props.color[0]},${props.color[1]})`
    : "none";

  return (
    <Button
      className="dashboardBox"
      style={{
        backgroundImage: backgroundStyle,
      }}
    >
      {props.grow === true ? (
        <span className="chart">
          <LuTrendingUp />
        </span>
      ) : (
        <span className="chart">
          <LuTrendingDown />
        </span>
      )}

      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white mb-0">{props.title}</h4>
          <span className="text-white">{props.value}</span>
        </div>
        <div className="ml-auto">
          {props.icon ? <span className="icon">{props.icon}</span> : ""}
        </div>
      </div>

      <div className="d-flex align-items-center w-100 bottomEle">
        <h6 className="text-white mb-0 mt-0">Last Month</h6>
        <div className="ml-auto">
          <Button className="ml-auto toggleIcon" onClick={handleClick}>
            <BsThreeDotsVertical />
          </Button>
          <Menu
            className="dropDown_menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              },
            }}
          >
            <MenuItem key="lastDay" selected={false} onClick={handleClose}>
              Last Day
            </MenuItem>
            <MenuItem key="lastWeek" selected={false} onClick={handleClose}>
              Last Week
            </MenuItem>
            <MenuItem key="lastMonth" selected={false} onClick={handleClose}>
              Last Month
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Button>
  );
};

export default DashboardBox;
