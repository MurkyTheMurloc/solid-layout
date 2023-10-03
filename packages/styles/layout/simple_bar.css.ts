import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const width = createVar();
export const height = createVar();
export const top = createVar();
export const left = createVar();
export const right = createVar();
export const bottom = createVar();

export const simpleBar = style({
    position: "sticky",
    top: fallbackVar(top, "0px"),
    left: fallbackVar(left, "0px"),
    right: fallbackVar(right, "0px"),
    bottom: fallbackVar(bottom, "0px"),
    width: fallbackVar(width, "100%"),
    height: fallbackVar(height, "100%"),
    zIndex: 100,
});