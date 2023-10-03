import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const gap = createVar();
export const padding = createVar();

export const cluster = style({
    display: "flex",
    flexWrap: "wrap",
    gap: fallbackVar(gap, "1rem"),
    padding: fallbackVar(padding, "1rem"),
});