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

export const layoutComponentSpecificProps = {
  [layoutComponentTypes.lightHeader]: {
    materialGridProps: defaultMaterialGridProps.fullWidth,
    classNames: ["grid_item", "header_light", "layout_component"],
  },
  [layoutComponentTypes.darkHeader]: {
    materialGridProps: defaultMaterialGridProps.fullWidth,
    classNames: ["grid_item", "header_dark", "layout_component"],
  },
  [layoutComponentTypes.lightFooter]: {
    materialGridProps: defaultMaterialGridProps.fullWidth,
    classNames: ["grid_item", "footer_light", "layout_component"],
  },
  [layoutComponentTypes.darkFooter]: {
    materialGridProps: defaultMaterialGridProps.fullWidth,
    classNames: ["grid_item", "footer_dark", "layout_component"],
  },
  [layoutComponentTypes.yellowContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: ["grid_item", "yellow_content", "layout_component"],
  },
  [layoutComponentTypes.greyContent]: {
    materialGridProps: defaultMaterialGridProps.wideContent,
    classNames: ["grid_item", "grey_content", "layout_component"],
  },
  [layoutComponentTypes.redContent]: {
    materialGridProps: defaultMaterialGridProps.wideContent,
    classNames: ["grid_item", "red_content", "layout_component"],
  },
  [layoutComponentTypes.brownContent]: {
    materialGridProps: defaultMaterialGridProps.wideContent,
    classNames: ["grid_item", "brown_content", "layout_component"],
  },
  [layoutComponentTypes.purpleContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: ["grid_item", "purple_content", "layout_component"],
  },
  [layoutComponentTypes.magentaContent]: {
    materialGridProps: defaultMaterialGridProps.wideContent,
    classNames: ["grid_item", "magenta_content", "layout_component"],
  },
  [layoutComponentTypes.blueContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: ["grid_item", "blue_content", "layout_component"],
  },
  [layoutComponentTypes.pinkContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: ["grid_item", "pink_content", "layout_component"],
  },
  [layoutComponentTypes.greenContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: ["grid_item", "green_content", "layout_component"],
  },
  [layoutComponentTypes.orangeContent]: {
    materialGridProps: defaultMaterialGridProps.regularContent,
    classNames: ["grid_item", "orange_content", "layout_component"],
  },
};
