import { v4 as uuid } from "uuid";

import { layoutsScreenActionTypes } from "Utils/constants";
import { checkIfAllIn1MatchSomeIn2 } from "Utils/functions";

function layoutsReducer(
  state = {
    layoutIds: [
      /*id*/
    ],
    layoutData: {
      /* Component data structure example -->
        id: {
          configurationComponentsIds: [id1, id2,]
          layoutData: {
            id1: {data},
            id2: {data}
          },
          metaData: {
            dataAdded: new Date(),
            layoutName: 'Layout1'
          }
        }
        */
    },
  },
  action
) {
  const { data } = action;
  const { layoutIds, layoutData } = state;

  switch (action.type) {
    case layoutsScreenActionTypes.addLayoutData: {
      const { configurationComponentsIds, configurationComponentsData } = data;
      const layoutId = uuid();
      const enrichedLayoutData = {
        // add here any default data or parameters that may not be
        // sent on the action's payload, for convenience or by omission
        ...data,
        metaData: {
          dateAdded: new Date(),
          title: `Layout ${layoutIds.length + 1}`,
          ...data.metaData,
          favorite: false,
        },
      };

      const requiredParams = [
        configurationComponentsIds,
        configurationComponentsData,
      ];

      const requiredParamsAreProvided = requiredParams.every(
        (param) => typeof param !== "undefined"
      );

      if (!requiredParamsAreProvided) {
        return state;
      }

      return {
        ...state,
        layoutIds: [...layoutIds, layoutId],
        layoutData: {
          ...layoutData,
          [layoutId]: enrichedLayoutData,
        },
      };
    }

    case layoutsScreenActionTypes.updateLayoutData: {
      // updateLayoutData supports update for multiple components
      // at the same time if they all match the same updateCriteria
      const {
        updateCriteria, // properties layout needs to contain in order to receive *layoutDataUpdates*
        ...layoutDataUpdates // data that will update the component entry/entries
      } = data;
      const requiredParams = [updateCriteria];
      const requiredParamsAreProvided = requiredParams.every((param) =>
        Boolean(param)
      );

      if (!requiredParamsAreProvided) {
        return state;
      }

      if (updateCriteria.layoutId) {
        // if updateCriteria contains layoutId, update the layoutData
        // corresponding to it and return
        const newState = {
          ...state,
          layoutData: {
            ...layoutData,
            [updateCriteria.layoutId]: {
              ...layoutData[updateCriteria.layoutId],
              ...layoutDataUpdates,
            },
          },
        };

        return newState;
      }

      const updatedLayoutData = layoutIds.reduce((acc, currentId) => {
        if (checkIfAllIn1MatchSomeIn2(updateCriteria, layoutData[currentId])) {
          // if all the updateCriteria values are matched in the layoutData, apply update
          return {
            ...acc,
            [currentId]: {
              ...layoutData[currentId],
              ...layoutDataUpdates, // override current data with the updates
            },
          };
        }
        // else return current data
        return {
          ...acc,
          [currentId]: layoutData[currentId],
        };
      }, {});

      return {
        ...state,
        layoutData: updatedLayoutData,
      };
    }

    case layoutsScreenActionTypes.removeLayoutData: {
      const { removeCriteria } = action.data;
      if (!removeCriteria) {
        return state;
      }

      if (removeCriteria.layoutId) {
        // if removeCriteria contains layoutId, remove the id and the data corresponding to it
        const newState = {
          ...state,
          layoutIds: state.layoutIds.filter(
            (id) => id !== removeCriteria.layoutId
          ),
        };
        delete newState.layoutData[removeCriteria.layoutId];

        return newState;
      }

      // else, if the removeCriteria is not the layoutId, but a value in the layoutData
      const updatedLayoutData = layoutIds.reduce(
        (acc, currentId) => {
          if (
            checkIfAllIn1MatchSomeIn2(removeCriteria, layoutData[currentId])
          ) {
            // if all the removeCriteria values are matched in the layoutData, don't add the data to the new state (i.e. - remove it)
            return {
              ...acc,
            };
          }
          // else return current data (that it's not matched for removal)
          return {
            ...acc,
            accLayoutData: {
              ...acc.accLayoutData,
              [currentId]: layoutData[currentId],
            },
            accLayoutIds: [...accLayoutIds, currentId],
          };
        },
        {
          accLayoutIds: [],
          accLayoutData: {},
        }
      );

      return {
        ...state,
        layoutIds: updatedLayoutData.accLayoutIds,
        layoutData: updatedLayoutData.accLayoutData,
      };
    }

    default:
      return state;
  }
}

export default layoutsReducer;
