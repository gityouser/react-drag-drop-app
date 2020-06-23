import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import GridItem from "./GridItem";
import { testComponentIds, testComponentData } from "Data";
import { layoutComponentSpecificProps } from "Constants/";
import AppDrawer from "Components/AppDrawer";

function ConfigurationScreen() {
  // bypass all DataTransfer API and manage data transfer state in React
  const [transferredData, setTransferredData] = useState(null);

  return (
    <AppDrawer>
      <Grid className="configuration_screen_container" container spacing={3}>
        {renderComponents({
          testComponentIds,
          testComponentData,
          transferredData,
          setTransferredData,
        })}
      </Grid>
    </AppDrawer>
  );
}

function renderComponents({
  testComponentIds,
  testComponentData,
  transferredData,
  setTransferredData,
}) {
  return testComponentIds.map((id) => {
    const { innerText, componentType, isSwappable } = testComponentData[id];
    const { classNames, materialGridProps } = layoutComponentSpecificProps[
      componentType
    ];

    return (
      <GridItem
        id={id}
        draggable
        isSwappable={isSwappable}
        onDragStart={() => {
          setTransferredData({ id });
        }}
        onDragOver={(e) => {
          // allow drop
          e.preventDefault();
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          console.log("enter", e.target.id);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          console.log("leave", e.target.id);
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log("droppedId", transferredData);
        }}
        key={id}
        materialGridProps={materialGridProps}
        innerText={innerText}
        classNames={[...classNames]}
      />
    );
  });
}

export default ConfigurationScreen;
