import React from "react";
import { Grid } from "@material-ui/core";

function GridItem({ materialGridProps, innerText, classNames, ...props }) {
  return (
    <Grid item {...materialGridProps}>
      <div className={classNames.join(" ")} {...props}>
        {innerText}
      </div>
    </Grid>
  );
}

export default GridItem;
