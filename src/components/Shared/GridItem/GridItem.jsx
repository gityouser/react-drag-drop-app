import React from "react";
import { Grid } from "@material-ui/core";

function GridItem({ materialGridProps, classNames, children, ...props }) {
  return (
    <Grid item {...materialGridProps}>
      <div
        style={{ position: "relative" }}
        className={classNames?.join(" ")}
        {...props}
      >
        {children}
      </div>
    </Grid>
  );
}

export default GridItem;
