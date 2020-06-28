import { layoutComponentTypes } from "Constants/";

export const appDrawerComponentSpecificProps = {
  [layoutComponentTypes.lightHeader]: {
    classNames: ["header_light", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.darkHeader]: {
    classNames: ["header_dark", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.lightFooter]: {
    classNames: ["footer_light", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.darkFooter]: {
    classNames: ["footer_dark", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.yellowContent]: {
    classNames: ["yellow_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.greyContent]: {
    classNames: ["grey_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.redContent]: {
    classNames: ["red_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.brownContent]: {
    classNames: ["brown_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.purpleContent]: {
    classNames: ["purple_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.magentaContent]: {
    classNames: ["magenta_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.blueContent]: {
    classNames: ["blue_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.pinkContent]: {
    classNames: ["pink_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.greenContent]: {
    classNames: ["green_content", "drawer_option", "component-hover"],
  },
  [layoutComponentTypes.orangeContent]: {
    classNames: ["orange_content", "drawer_option", "component-hover"],
  },
};
