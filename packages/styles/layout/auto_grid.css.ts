import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const gap = createVar();
export const padding = createVar();
export const columns = createVar();


export const autoGrid = style({
    display: "grid",
    gap: fallbackVar(gap, "1rem"),
    padding: fallbackVar(padding, "1rem"),
    gridAutoColumns: `repeat(auto-fit, minmax(${fallbackVar(columns, "10rem")}, 1fr))`


});