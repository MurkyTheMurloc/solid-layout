import {createVar, fallbackVar, globalStyle} from "@vanilla-extract/css";

export const gap = createVar();
export const padding = createVar();
export const columns = createVar();


globalStyle(".solid-layout-auto-grid", {
    display: "grid",
    gap: fallbackVar(gap, "1rem"),
    padding: fallbackVar(padding, "1rem"),
    gridTemplateColumns: `repeat(auto-fit, minmax(min(${fallbackVar(columns, "10rem")},100%), 1fr))`
});