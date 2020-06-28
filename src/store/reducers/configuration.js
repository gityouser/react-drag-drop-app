import { v4 as uuid } from "uuid";
import { configurationScreenActionTypes } from "Utils/constants";
import { checkIfAllIn1MatchSomeIn2 } from "Utils/functions";

import { availableComponentsIds, availableComponentsData } from "Data";

function configurationReducer(
  state = {
    availableComponentsIds,
    availableComponentsData,
    configurationComponentsIds: [
      /* f1ebee40-fd61-455f-ad4c-b34253957110 */
    ],
    configurationComponentsData: {
      /* Component data structure example -->
      f1ebee40-fd61-455f-ad4c-b34253957110: {
        "innerText": "GREEN",
        "componentType": "GREEN_CONTENT",
        "allowSwap": true,
        "materialGridProps": {
          "xs": 12,
          "sm": 6,
          "md": 4,
          "lg": 3
        },
        "classNames": [
          "grid_item",
          "green_content",
          "layout_component",
          "drop-available",
          "drop-unavailable",
        ],
      }
      */
    },
    // the id of the corresponding layout if configuration is opened in 'edit mode'
    layoutId: null,
  },
  action
) {
  const { data } = action;
  const { configurationComponentsIds, configurationComponentsData } = state;

  switch (action.type) {
    case configurationScreenActionTypes.addComponentData: {
      const componentId = uuid();
      const {
        materialGridProps,
        classNames,
        innerText,
        componentType,
        allowSwap,
      } = data;

      const requiredParams = [
        materialGridProps,
        classNames,
        innerText,
        componentType,
        allowSwap,
      ];

      const requiredParamsAreProvided = requiredParams.every(
        (param) => typeof param !== "undefined"
      );

      if (!requiredParamsAreProvided) {
        return state;
      }

      return {
        ...state,
        configurationComponentsIds: [
          ...configurationComponentsIds,
          componentId,
        ],
        configurationComponentsData: {
          ...configurationComponentsData,
          [componentId]: data,
        },
      };
    }
    case configurationScreenActionTypes.updateComponentData: {
      // updateComponentData supports update for multiple components
      // at the same time if they all match the same updateCriteria
      const {
        updateCriteria, // what component needs to contain in order to receive *componentDataUpdates*
        ...componentDataUpdates // data that will update the component entry/entries
      } = data;
      const requiredParams = [updateCriteria];
      const requiredParamsAreProvided = requiredParams.every((param) =>
        Boolean(param)
      );

      if (!requiredParamsAreProvided) {
        return state;
      }

      if (updateCriteria.componentId) {
        // if updateCriteria contains componentId, update the configurationComponentsData corresponding to it
        const newState = {
          ...state,
          configurationComponentsData: {
            ...configurationComponentsData,
            [updateCriteria.componentId]: {
              ...configurationComponentsData[updateCriteria.componentId],
              ...componentDataUpdates,
            },
          },
        };

        return newState;
      }

      const updatedComponentData = configurationComponentsIds.reduce(
        (acc, currentId) => {
          if (
            checkIfAllIn1MatchSomeIn2(
              updateCriteria,
              configurationComponentsData[currentId]
            )
          ) {
            // if all the updateCriteria values are matched in the configurationComponentsData, apply update
            return {
              ...acc,
              [currentId]: {
                ...configurationComponentsData[currentId],
                ...configurationComponentsDataUpdates, // override current data with the updates
              },
            };
          }
          // else return current data
          return {
            ...acc,
            [currentId]: configurationComponentsData[currentId],
          };
        },
        {}
      );

      return {
        ...state,
        configurationComponentsData: updatedComponentData,
      };
    }

    case configurationScreenActionTypes.sortComponentIds: {
      const { compareFunction } = data;
      // Expose access to copies of componentIds and data to the compareFunction function, so it can handle data and reorder the IDs.
      // This provides reusability, by eliminating the need to create a separate action for each type of sort/reorder scenario.
      const sortedIds = compareFunction({
        configurationComponentsIds: [...configurationComponentsIds],
        configurationComponentsData: { ...configurationComponentsData },
      });

      return {
        ...state,
        configurationComponentsIds: sortedIds,
      };
    }

    case configurationScreenActionTypes.removeComponentData: {
      const { removeCriteria } = action.data;
      if (!removeCriteria) {
        return state;
      }

      if (removeCriteria.componentId) {
        // if removeCriteria contains componentId, remove the id and the data corresponding to it
        const newState = {
          ...state,
          configurationComponentsIds: state.configurationComponentsIds.filter(
            (id) => id !== removeCriteria.componentId
          ),
        };
        delete newState.configurationComponentsData[removeCriteria.componentId];

        return newState;
      }

      // else, if the removeCriteria is not the componentId, but a value in the configurationComponentsData
      const updatedComponentData = configurationComponentsIds.reduce(
        (acc, currentId) => {
          if (
            checkIfAllIn1MatchSomeIn2(
              removeCriteria,
              configurationComponentsData[currentId]
            )
          ) {
            // if all the removeCriteria values are matched in the configurationComponentsData, don't add the data to the new state (i.e. - remove it)
            return {
              ...acc,
            };
          }
          // else return current data (that it's not matched for removal)
          return {
            ...acc,
            accConfigurationData: {
              ...acc.accConfigurationData,
              [currentId]: configurationComponentsData[currentId],
            },
            accConfigurationIds: [...accConfigurationIds, currentId],
          };
        },
        {
          accConfigurationIds: [],
          accConfigurationData: {},
        }
      );

      return {
        ...state,
        configurationComponentsIds: updatedComponentData.accConfigurationIds,
        configurationComponentsData: updatedComponentData.accConfigurationData,
      };
    }

    case configurationScreenActionTypes.updateAllConfigurationData: {
      const {
        configurationComponentsIds,
        configurationComponentsData,
        layoutId,
      } = data;

      return {
        ...state,
        configurationComponentsIds,
        configurationComponentsData,
        layoutId,
      };
    }

    default:
      return state;
  }
}

export default configurationReducer;
