import {createVar, fallbackVar, style, createGlobalTheme, globalStyle} from "@vanilla-extract/css";

export const gap = createVar()

export const direction = createVar()

export const padding = createVar()


globalStyle('.solid-layout-stack',  {
    display: "flex",
    flexDirection: fallbackVar(direction, "column"),
    gap: fallbackVar(gap, "1rem"),
    padding: fallbackVar(padding, "1rem"),
})