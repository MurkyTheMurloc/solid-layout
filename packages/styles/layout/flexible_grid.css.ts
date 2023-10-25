import {createVar, fallbackVar, style, globalStyle} from "@vanilla-extract/css";

export const gap = createVar()
export const padding = createVar()


globalStyle(".solid-layout-flexible-grid", {
    display: "flex",
    flexWrap: "wrap",
    padding: fallbackVar(padding, "1rem"),
    gap: fallbackVar(gap, "1rem"),
});
globalStyle(`.solid-layout-flexible-grid > *`, {
    flex: 1
});