import { v4 as uuid } from "uuid";
import { configurationScreenActionTypes } from "Constants/";

import { availableComponentsIds, availableComponentsData } from "Data";

function configurationReducer(
  state = {
    availableComponentsIds,
    availableComponentsData,
    configurationComponentsIds: [],
    configurationComponentsData: {},
  },
  action
) {
  const { data } = action;
  const { configurationComponentsIds, configurationComponentsData } = state;

  switch (action.type) {
    case configurationScreenActionTypes.addComponentData: {
      const componentId = uuid();

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
      return {
        ...state,
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
      return {
        ...state,
      };
    }
    case configurationScreenActionTypes.removeAllData: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

export default configurationReducer;
