export const layoutComponentTypes = {
  lightHeader: "LIGHT_HEADER",
  darkHeader: "DARK_HEADER",
  lightFooter: "LIGHT_FOOTER",
  darkFooter: "DARK_FOOTER",
  yellowContent: "YELLOW_CONTENT",
  greyContent: "GREY_CONTENT",
  redContent: "RED_CONTENT",
  brownContent: "BROWN_CONTENT",
  purpleContent: "PURPLE_CONTENT",
  magentaContent: "MAGENTA_CONTENT",
  blueContent: "BLUE_CONTENT",
  pinkContent: "PINK_CONTENT",
  greenContent: "GREEN_CONTENT",
  orangeContent: "ORANGE_CONTENT",
};

const defaultMaterialGridProps = {
  regularContent: { xs: 12, sm: 6, md: 4, lg: 3 },
  wideContent: { xs: 12, sm: 6, md: 4, lg: 3 },
  fullWidth: { xs: 12, sm: 12, md: 12, lg: 12 },
};

export function pass() {
  return {
    ala: "bala",
    porto: "cala",
  };
}

export const layoutComponentClasses = {
  gridItem: "grid_item",
  layoutComponent: "layout_component",
  headerLight: "header_light",
  headerDark: "header_dark",
  footerLight: "footer_light",
  footerDark: "footer_dark",
  yellowContent: "yellow_content",
  greyContent: "grey_content",
  redContent: "red_content",
  brownContent: "brown_content",
  purpleContent: "purple_content",
  magentaContent: "magenta_content",
  blueContent: "blue_content",
  pinkContent: "pink_content",
  greenContent: "green_content",
  orangeContent: "orange_content",
  dropAvailable: "drop-available",
  dropUnavailable: "drop-unavailable",
};

const {
  gridItem,
  layoutComponent,
  headerLight,
  headerDark,
  footerLight,
  footerDark,
  yellowContent,
  greyContent,
  redContent,
  brownContent,
  purpleContent,
  magentaContent,
  blueContent,
  pinkContent,
  greenContent,
  orangeContent,
} = layoutComponentClasses;

export const layoutComponentSpecificProps = {
  [layoutComponentTypes.lightHeader]: {
    materialGridProps: defaultMaterialGridProps.fullWidth,
    classNames: [gridItem, headerLight, layoutComponent],
  },
  [layoutComponentTypes.darkHeader]: {
    materialGridProps: defaultMaterialGridProps.fullWidth,
    classNames: [gridItem, headerDark, layoutComponent],
  },
  [layoutComponentTypes.lightFooter]: {
    materialGridProps: defaultMaterialGridProps.fullWidth,
    classNames: [gridItem, footerLight, layoutComponent],
  },
  [layoutComponentTypes.darkFooter]: {
    materialGridProps: defaultMaterialGridProps.fullWidth,
    classNames: [gridItem, footerDark, layoutComponent],
  },
  [layoutComponentTypes.yellowContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: [gridItem, yellowContent, layoutComponent],
  },
  [layoutComponentTypes.greyContent]: {
    materialGridProps: defaultMaterialGridProps.wideContent,
    classNames: [gridItem, greyContent, layoutComponent],
  },
  [layoutComponentTypes.redContent]: {
    materialGridProps: defaultMaterialGridProps.wideContent,
    classNames: [gridItem, redContent, layoutComponent],
  },
  [layoutComponentTypes.brownContent]: {
    materialGridProps: defaultMaterialGridProps.wideContent,
    classNames: [gridItem, brownContent, layoutComponent],
  },
  [layoutComponentTypes.purpleContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: [gridItem, purpleContent, layoutComponent],
  },
  [layoutComponentTypes.magentaContent]: {
    materialGridProps: defaultMaterialGridProps.wideContent,
    classNames: [gridItem, magentaContent, layoutComponent],
  },
  [layoutComponentTypes.blueContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: [gridItem, blueContent, layoutComponent],
  },
  [layoutComponentTypes.pinkContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: [gridItem, pinkContent, layoutComponent],
  },
  [layoutComponentTypes.greenContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: [gridItem, greenContent, layoutComponent],
  },
  [layoutComponentTypes.orangeContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: [gridItem, orangeContent, layoutComponent],
  },
};
