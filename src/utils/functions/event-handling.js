import { dragAndDropEventTypes, layoutComponentClasses } from "Utils/constants";

export function handleDragAndDropStyleChange({
  classNames,
  dragStartId,
  dropZoneId,
  allowSwap,
  event,
}) {
  const { dropAvailable, dropUnavailable } = layoutComponentClasses;

  // ignore the switch statement if the *drag image* is dragged over the element that generated it
  if (dragStartId !== dropZoneId) {
    switch (event.type) {
      case dragAndDropEventTypes.dragEnter: {
        return allowSwap
          ? [...classNames, dropAvailable]
          : [...classNames, dropUnavailable];
      }

      case dragAndDropEventTypes.dragLeave: {
        // remove dropAvailable and dropUnavailable from classNames
        return classNames.filter(
          (className) => ![dropAvailable, dropUnavailable].includes(className)
        );
      }

      case dragAndDropEventTypes.drop: {
        // remove dropAvailable and dropUnavailable from classNames
        return classNames.filter(
          (className) => ![dropAvailable, dropUnavailable].includes(className)
        );
      }

      default:
        return classNames;
    }
  }

  return classNames;
}
