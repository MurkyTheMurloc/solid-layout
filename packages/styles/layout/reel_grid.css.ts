import {createVar, fallbackVar, globalStyle} from "@vanilla-extract/css";
import { appShellContainer } from "./app_shell.css";


export const direction = createVar();
export const gridAutoColumns = createVar();
export const scrollBehavior = createVar();
export const gap = createVar();
export const padding = createVar();

export const scrollPadding = createVar();
export const overFlowX = createVar();
export const overFlowY = createVar();
export const breakPointDirection = createVar();
export const breakpointAutoColumns = createVar();
export const scrollBar = createVar()


globalStyle(".solid-layout-reel-grid",{
    display: "grid",
    gridAutoFlow: fallbackVar(direction, "row"),
    gridAutoColumns: fallbackVar(gridAutoColumns, "100%"),
    scrollBehavior: "smooth",
    scrollSnapType: "x mandatory",
    overflowX:  "auto",
    overflowY: "auto",
    gap: fallbackVar(gap, "1rem"),
    padding: fallbackVar(padding, "1rem"),
    "@container": {
        [`${appShellContainer} (max-width: 768px)`]: {
            gridAutoFlow: fallbackVar(breakPointDirection, "column"),
            gridAutoColumns: fallbackVar(breakpointAutoColumns, "max-content"),

        },
      // [`${appShell} (min-width: 768px)`]: {
      //     gridAutoFlow: fallbackVar(breakPointDirection, "column"),
      //     gridAutoColumns: fallbackVar(breakpointAutoColumns, "max-content"),

      // },
      // [`${appShell} (min-width:  1024px)`]: {
      //     gridAutoFlow: fallbackVar(direction, "row"),
      //     gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
      // },
      // [`${appShell} (min-width: 1280px)`]: {
      //     gridAutoFlow: fallbackVar(direction, "row"),
      //     gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
      // },
      // [`${appShell} (min-width: 1536px)`]: {
      //     gridAutoFlow: fallbackVar(direction, "row"),
      //     gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
      // },

    }
});