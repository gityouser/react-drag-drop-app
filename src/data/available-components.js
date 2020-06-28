import { layoutComponentTypes } from "Utils/constants";

// prettier-ignore
export const availableComponentsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14]

export const availableComponentsData = {
  1: {
    innerText: "BLUE",
    allowSwap: true,
    componentType: layoutComponentTypes.blueContent,
  },
  2: {
    innerText: "PINK",
    allowSwap: true,
    componentType: layoutComponentTypes.pinkContent,
  },
  3: {
    innerText: "GREEN",
    allowSwap: true,
    componentType: layoutComponentTypes.greenContent,
  },
  4: {
    innerText: "ORANGE",
    allowSwap: true,
    componentType: layoutComponentTypes.orangeContent,
  },
  5: {
    innerText: "YELLOW \r\n (won't let others swap)",
    allowSwap: false,
    componentType: layoutComponentTypes.yellowContent,
  },
  6: {
    innerText: "GREY",
    allowSwap: true,
    componentType: layoutComponentTypes.greyContent,
  },
  7: {
    innerText: "RED",
    allowSwap: true,
    componentType: layoutComponentTypes.redContent,
  },
  8: {
    innerText: "BROWN",
    allowSwap: true,
    componentType: layoutComponentTypes.brownContent,
  },
  9: {
    innerText: "PURPLE",
    allowSwap: true,
    componentType: layoutComponentTypes.purpleContent,
  },
  10: {
    innerText: "MAGENTA",
    allowSwap: true,
    componentType: layoutComponentTypes.magentaContent,
  },
  11: {
    innerText: "HEADER LIGHT",
    allowSwap: true,
    componentType: layoutComponentTypes.lightHeader,
  },
  12: {
    innerText: "HEADER DARK",
    allowSwap: true,
    componentType: layoutComponentTypes.darkHeader,
  },
  13: {
    innerText: "FOOTER LIGHT",
    allowSwap: true,
    componentType: layoutComponentTypes.lightFooter,
  },
  14: {
    innerText: "FOOTER DARK",
    allowSwap: true,
    componentType: layoutComponentTypes.darkFooter,
  },
};
