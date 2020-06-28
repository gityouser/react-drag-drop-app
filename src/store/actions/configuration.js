import { configurationScreenActionTypes } from "Constants/action-types";

export function addComponentData(data) {
  return {
    type: configurationScreenActionTypes.addComponentData,
    data,
  };
}
export function updateComponentData(data) {
  return {
    type: configurationScreenActionTypes.updateComponentData,
    data,
  };
}

export function sortComponentIds(compareFunction) {
  return {
    type: configurationScreenActionTypes.sortComponentIds,
    data: { compareFunction },
  };
}

export function removeComponentData({ removeCriteria }) {
  return {
    type: configurationScreenActionTypes.removeComponentData,
    data: { removeCriteria },
  };
}

/**
 * Replaces the configuration components state,
 * in an imperative way.
 * The values passed in props will completely replace
 * the same correspondent values in the state.
 * @param {Object} props
 * @param {Array} props.configurationComponentsIds
 * @param {Object} props.configurationComponentsData
 */
export function updateAllConfigurationData(props = {}) {
  const {
    configurationComponentsIds = [],
    configurationComponentsData = {},
    layoutId,
  } = props;

  return {
    type: configurationScreenActionTypes.updateAllConfigurationData,
    data: {
      configurationComponentsIds: [...configurationComponentsIds],
      configurationComponentsData: { ...configurationComponentsData },
      layoutId,
    },
  };
}
