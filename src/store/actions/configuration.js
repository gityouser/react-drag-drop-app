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

export function removeComponentData({}) {
  return {
    type: configurationScreenActionTypes.removeComponentData,
  };
}
export function removeAllData({}) {
  return {
    type: configurationScreenActionTypes.removeAllData,
  };
}
