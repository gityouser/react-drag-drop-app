import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import CancelIcon from "@material-ui/icons/Cancel";

import GridItem from "../Shared/GridItem";
import {
  swapArrayElements,
  handleDragAndDropStyleChange,
} from "Utils/functions";
import { layoutComponentClasses } from "Utils/constants";
import {
  sortComponentIds,
  updateComponentData,
  removeComponentData,
} from "Store/actions";

function ConfigurationScreen({
  configurationComponentsIds,
  configurationComponentsData,
  sortComponentIds,
  updateComponentData,
  removeComponentData,
}) {
  // bypass all DataTransfer API and manage data transfer state in React
  const [transferredData, setTransferredData] = useState(null);

  return (
    <div className="configuration_grid_wrapper">
      <Grid className="configuration_screen_container" container spacing={3}>
        {configurationComponentsIds.length ? (
          renderComponents({
            configurationComponentsIds,
            configurationComponentsData,
            transferredData,
            setTransferredData,
            sortComponentIds,
            updateComponentData,
            removeComponentData,
          })
        ) : (
          <h1>
            Configure your own layout by dragging the items here! <br></br> You
            can also swap them around! 😀
          </h1>
        )}
      </Grid>
    </div>
  );
}

function renderComponents({
  configurationComponentsIds,
  configurationComponentsData,
  transferredData,
  setTransferredData,
  sortComponentIds,
  updateComponentData,
  removeComponentData,
}) {
  return configurationComponentsIds.map((id) => {
    const {
      innerText,
      allowSwap,
      classNames,
      materialGridProps,
    } = configurationComponentsData[id];

    return (
      <GridItem
        draggable
        onDragStart={() => {
          setTransferredData({ id });
        }}
        onDragOver={(event) => {
          // allow drop
          event.preventDefault();
        }}
        onDragEnter={(event) => {
          event.preventDefault();
          updateComponentData({
            updateCriteria: { componentId: id },
            classNames: handleDragAndDropStyleChange({
              classNames,
              dragStartId: transferredData?.id,
              dropZoneId: id,
              allowSwap,
              event,
            }),
          });
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          updateComponentData({
            updateCriteria: { componentId: id },
            classNames: handleDragAndDropStyleChange({
              classNames,
              dragStartId: transferredData?.id,
              dropZoneId: id,
              allowSwap,
              event,
            }),
          });
        }}
        onDrop={(event) => {
          event.preventDefault();
          updateComponentData({
            updateCriteria: { componentId: id },
            classNames: handleDragAndDropStyleChange({
              classNames,
              dragStartId: transferredData?.id,
              dropZoneId: id,
              allowSwap,
              event,
            }),
          });
          // The anonymous function passed below to sortComponentIds behaves very similarly to  the *compareFunction*
          // which native *Array.prototype.sort* method takes; the main difference here being that *swapArrayElements* is not
          // chained to the prototype, so the array it handles has to be passed as (first) argument
          if (allowSwap) {
            sortComponentIds(({ configurationComponentsIds }) =>
              swapArrayElements(configurationComponentsIds, [
                id, // id of the component it's dropped on (dropZoneId)
                transferredData?.id, // id of the component that's being dragged (dragStartId)
              ])
            );
          }
        }}
        key={id}
        materialGridProps={materialGridProps}
        classNames={[...classNames]}
      >
        {innerText}
        <CancelIcon
          onClick={() =>
            removeComponentData({
              removeCriteria: { componentId: id },
            })
          }
          style={{ position: "absolute", top: "5px", right: "5px" }}
        />
      </GridItem>
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
  { sortComponentIds, updateComponentData, removeComponentData }
)(ConfigurationScreen);
