import {createVar, fallbackVar, style} from "@vanilla-extract/css";
import {appShell} from "./app_shell.css";

export const direction = createVar();
export const gridAutoColumns = createVar();
export const scrollBehavior = createVar();
export const gap = createVar();
export const padding = createVar();
export const scrollType = createVar();
export const scrollAlignment = createVar();
export const scrollPadding = createVar();
export const overFlowX = createVar();
export const overFlowY = createVar();
export const breakPointDirection = createVar();
export const breakpointAutoColumns = createVar();



export const reelGrid = style({
    display: "grid",
    gridAutoFlow: fallbackVar(direction, "row"),
    gridAutoColumns: fallbackVar(gridAutoColumns, "100%"),
    scrollBehavior: fallbackVar(scrollBehavior, "smooth"),
    scrollSnapType: fallbackVar(scrollType, "x mandatory"),
    scrollSnapAlign: fallbackVar(scrollAlignment, "start"),
    scrollPadding: fallbackVar(scrollPadding, "1rem"),
    overflowX: fallbackVar(overFlowX, "auto"),
    overflowY: fallbackVar(overFlowY, "hidden"),
    gap: fallbackVar(gap, "0rem"),
    padding: fallbackVar(padding, "0rem"),
    "@container": {
        [`${appShell} (max-width: 768px)`]: {
            gridAutoFlow: fallbackVar(breakPointDirection, "column"),
            gridAutoColumns: fallbackVar(breakpointAutoColumns, "max-content"),

        },
        [`${appShell} (min-width: 768px)`]: {
            gridAutoFlow: fallbackVar(breakPointDirection, "column"),
            gridAutoColumns: fallbackVar(breakpointAutoColumns, "max-content"),

        },
        [`${appShell} (min-width:  1024px)`]: {
            gridAutoFlow: fallbackVar(direction, "row"),
            gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
        },
        [`${appShell} (min-width: 1280px)`]: {
            gridAutoFlow: fallbackVar(direction, "row"),
            gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
        },
        [`${appShell} (min-width: 1536px)`]: {
            gridAutoFlow: fallbackVar(direction, "row"),
            gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
        },

    }
});