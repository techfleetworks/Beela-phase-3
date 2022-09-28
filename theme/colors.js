/* 

This file describes all colors from the design system.

A colors object holds:
  - TRUE_BLACK
  - TRUE_WHITE
  - A core object
    - holds all the core colors
  - A tones object
    - holds tones for each core color based on varying L in HSL
  - A neutrals object
    - holds shades of gray all the way from White to Black
  - a communication object
    - holds colors that communicate messages to users
*/
const colors = {
  TRUE_BLACK: "#000000",
  TRUE_WHITE: "#FFFFFF",

  core: {
    PRIMARY_CORAL: "#F0DBEE",
    PRIMARY_HONEY: "#E6C619",
    PRIMARY_BERRY: "#3A4A92",
    SECONDARY_VIOLET: "#623762",
    SECONDARY_CREAM: "#F9F2D4",
    SECONDARY_CORNFLOWER: "#CCDAFF",
  },

  tones: {
    CORAL_1: "hsla(306, 41%, 10%, 1)",
    CORAL_2: "hsla(306, 41%, 20%, 1)",
    CORAL_3: "hsla(306, 41%, 30%, 1)",
    CORAL_4: "hsla(306, 41%, 40%, 1)",
    CORAL_5: "hsla(306, 41%, 50%, 1)",
    CORAL_6: "hsla(306, 41%, 60%, 1)",
    CORAL_7: "hsla(306, 41%, 70%, 1)",
    CORAL_8: "hsla(306, 41%, 80%, 1)",
    CORAL_9: "hsla(306, 41%, 90%, 1)",

    HONEY_1: "hsla(51, 80%, 10%, 1)",
    HONEY_2: "hsla(51, 80%, 20%, 1)",
    HONEY_3: "hsla(51, 80%, 30%, 1)",
    HONEY_4: "hsla(51, 80%, 40%, 1)",
    HONEY_5: "hsla(51, 80%, 50%, 1)",
    HONEY_6: "hsla(51, 80%, 60%, 1)",
    HONEY_7: "hsla(51, 80%, 70%, 1)",
    HONEY_8: "hsla(51, 80%, 80%, 1)",
    HONEY_9: "hsla(51, 80%, 90%, 1)",

    BERRY_1: "hsla(229, 43%, 10%, 1)",
    BERRY_2: "hsla(229, 43%, 20%, 1)",
    BERRY_3: "hsla(229, 43%, 30%, 1)",
    BERRY_4: "hsla(229, 43%, 40%, 1)",
    BERRY_5: "hsla(229, 43%, 50%, 1)",
    BERRY_6: "hsla(229, 43%, 60%, 1)",
    BERRY_7: "hsla(229, 43%, 70%, 1)",
    BERRY_8: "hsla(229, 43%, 80%, 1)",
    BERRY_9: "hsla(229, 43%, 90%, 1)",

    VIOLET_1: "hsla(300, 28%, 10%, 1)",
    VIOLET_2: "hsla(300, 28%, 20%, 1)",
    VIOLET_3: "hsla(300, 28%, 30%, 1)",
    VIOLET_4: "hsla(300, 28%, 40%, 1)",
    VIOLET_5: "hsla(300, 28%, 50%, 1)",
    VIOLET_6: "hsla(300, 28%, 60%, 1)",
    VIOLET_7: "hsla(300, 28%, 70%, 1)",
    VIOLET_8: "hsla(300, 28%, 80%, 1)",
    VIOLET_9: "hsla(300, 28%, 90%, 1)",

    CREAM_1: "hsla(49, 76%, 10%, 1)",
    CREAM_2: "hsla(49, 76%, 20%, 1)",
    CREAM_3: "hsla(49, 76%, 30%, 1)",
    CREAM_4: "hsla(49, 76%, 40%, 1)",
    CREAM_5: "hsla(49, 76%, 50%, 1)",
    CREAM_6: "hsla(49, 76%, 60%, 1)",
    CREAM_7: "hsla(49, 76%, 70%, 1)",
    CREAM_8: "hsla(49, 76%, 80%, 1)",
    CREAM_9: "hsla(49, 76%, 90%, 1)",

    CORNFLOWER_1: "hsla(224, 100%, 10%, 1)",
    CORNFLOWER_2: "hsla(224, 100%, 20%, 1)",
    CORNFLOWER_3: "hsla(224, 100%, 30%, 1)",
    CORNFLOWER_4: "hsla(224, 100%, 40%, 1)",
    CORNFLOWER_5: "hsla(224, 100%, 50%, 1)",
    CORNFLOWER_6: "hsla(224, 100%, 60%, 1)",
    CORNFLOWER_7: "hsla(224, 100%, 70%, 1)",
    CORNFLOWER_8: "hsla(224, 100%, 80%, 1)",
    CORNFLOWER_9: "hsla(224, 100%, 90%, 1)",
  },

  neutrals: {
    BLACK: "#1C1C19",
    GRAY_1: "#44433B",
    GRAY_2: "#83837C",
    GRAY_3: "#B7B6AE",
    GRAY_4: "#CFCEC9",
    GRAY_5: "#E6E6E5",
    WHITE: "#F7F7F6",
  },

  communication: {
    SUCCESS: "#419D78",
    WARNING: "#D66C3E",
    ERROR: "#C73A46",
    INFO: "#384CA7",
  },
}

export default colors
