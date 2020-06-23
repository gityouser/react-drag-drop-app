import { layoutComponentTypes } from 'Constants/'

export const appDrawerComponentSpecificProps = {
  [layoutComponentTypes.lightHeader]: {
    classNames: ['header_light', 'drawer_option '],
  },
  [layoutComponentTypes.darkHeader]: {
    classNames: ['header_dark', 'drawer_option '],
  },
  [layoutComponentTypes.lightFooter]: {
    classNames: ['footer_light', 'drawer_option '],
  },
  [layoutComponentTypes.darkFooter]: {
    classNames: ['footer_dark', 'drawer_option '],
  },
  [layoutComponentTypes.yellowContent]: {
    classNames: ['yellow_content', 'drawer_option '],
  },
  [layoutComponentTypes.greyContent]: {
    classNames: ['grey_content', 'drawer_option '],
  },
  [layoutComponentTypes.redContent]: {
    classNames: ['red_content', 'drawer_option '],
  },
  [layoutComponentTypes.brownContent]: {
    classNames: ['brown_content', 'drawer_option '],
  },
  [layoutComponentTypes.purpleContent]: {
    classNames: ['purple_content', 'drawer_option '],
  },
  [layoutComponentTypes.magentaContent]: {
    classNames: ['magenta_content', 'drawer_option '],
  },
  [layoutComponentTypes.blueContent]: {
    classNames: ['blue_content', 'drawer_option '],
  },
  [layoutComponentTypes.pinkContent]: {
    classNames: ['pink_content', 'drawer_option '],
  },
  [layoutComponentTypes.greenContent]: {
    classNames: ['green_content', 'drawer_option '],
  },
  [layoutComponentTypes.orangeContent]: {
    classNames: ['orange_content', 'drawer_option '],
  },
}
