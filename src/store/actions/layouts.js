import { layoutsScreenActionTypes } from "Constants/action-types";

export function addLayoutData(data) {
  return {
    type: layoutsScreenActionTypes.addLayoutData,
    data,
  };
}
export function updateLayoutData(data) {
  return {
    type: layoutsScreenActionTypes.updateLayoutData,
    data,
  };
}
export function removeLayoutData({ removeCriteria }) {
  return {
    type: layoutsScreenActionTypes.removeLayoutData,
    data: { removeCriteria },
  };
}
export function updateAllLayoutData({}) {
  return {
    type: layoutsScreenActionTypes.updateAllLayoutData,
  };
}
