import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const gap = createVar()

export const direction = createVar()

export const padding = createVar()
export const stack = style({
    display: "flex",
    flexDirection: fallbackVar(direction, "column"),
    gap: fallbackVar(gap, "1rem"),
    padding: fallbackVar(padding, "1rem"),
})