import {createVar, fallbackVar, globalStyle, style} from "@vanilla-extract/css";

export const gap = createVar();
export const padding = createVar();

globalStyle(".solid-layout-cluster", {
    display: "flex",
    flexWrap: "wrap",
    gap: fallbackVar(gap, "1rem"),
    padding: fallbackVar(padding, "1rem"),
});