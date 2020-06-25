import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import GridItem from "./GridItem";
import AppDrawer from "Components/AppDrawer";
import { layoutComponentSpecificProps } from "Constants/";
import { swapArrayElements } from "Functions";
import { sortComponentIds } from "Store/actions";

function ConfigurationScreen({
  configurationComponentsIds,
  configurationComponentsData,
  sortComponentIds,
}) {
  // bypass all DataTransfer API and manage data transfer state in React
  const [transferredData, setTransferredData] = useState(null);

  return (
    <AppDrawer>
      <Grid className="configuration_screen_container" container spacing={3}>
        {renderComponents({
          configurationComponentsIds,
          configurationComponentsData,
          transferredData,
          setTransferredData,
          sortComponentIds,
        })}
      </Grid>
    </AppDrawer>
  );
}

function renderComponents({
  configurationComponentsIds,
  configurationComponentsData,
  transferredData,
  setTransferredData,
  sortComponentIds,
}) {
  return configurationComponentsIds.map((id) => {
    console.log(
      "configurationComponentsData[id]",
      configurationComponentsData[id]
    );
    const { innerText, componentType, allowSwap } = configurationComponentsData[
      id
    ];

    const { classNames, materialGridProps } = layoutComponentSpecificProps[
      componentType
    ];

    return (
      <GridItem
        draggable
        allowSwap={allowSwap}
        onDragStart={() => {
          setTransferredData({ id });
        }}
        onDragOver={(e) => {
          // allow drop
          e.preventDefault();
        }}
        onDragEnter={(e) => {
          e.preventDefault();
        }}
        onDragLeave={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          // The anonymous function passed below to sortComponentIds behaves very similarly to  the *compareFunction*
          // which native *Array.prototype.sort* method takes, the main difference here being that *swapArrayElements* is not
          // chained to the prototype, so the array it handles has to be passed as (first) argument
          console.log("allowSwap:", allowSwap);
          if (allowSwap) {
            sortComponentIds(({ configurationComponentsIds }) =>
              swapArrayElements(configurationComponentsIds, [
                id,
                transferredData?.id,
              ])
            );
          }
        }}
        key={id}
        materialGridProps={materialGridProps}
        innerText={innerText}
        classNames={[...classNames]}
      />
    );
  });
}

export default connect(
  ({
    configuration: { configurationComponentsIds, configurationComponentsData },
  }) => ({
    configurationComponentsIds,
    configurationComponentsData,
  }),
  { sortComponentIds }
)(ConfigurationScreen);
