import React from "react";
import "./Tooltip.css";
import { Grid } from "@material-ui/core";
function Tooltip({ image, strong, ptag }) {
  return (
    <div className="container w-75 pt-5 mt-5">
      <Grid container >
        <img src={image} alt="" />
        <div
          type="text"
          className="btn btn-default bg-light toolTip"
          data-toggle="tooltip"
          data-placement="right"
          cursor="none" 
        >
          <strong>{strong}</strong> Sign up for your first match this week.
        </div>
      </Grid>
    </div>
  );
}

export default Tooltip;
