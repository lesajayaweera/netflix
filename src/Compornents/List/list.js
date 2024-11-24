import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const List = () => {
  return (
    <div className="list">
      <span className="list-title">Continue to Watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon />
        <div className="container"></div>
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
};

export default List;
