import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const gap = createVar()
export const padding = createVar()

export const flexibleGrid = style({
    display: "flex",
    flexWrap: "wrap",
    padding: fallbackVar(padding, "1rem"),
    gap: fallbackVar(gap, "1rem"),
})