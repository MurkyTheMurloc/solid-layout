import {style} from "@vanilla-extract/css";


export const pageCenterContainer = style({
    display: "grid",
    gridArea: "main-container",
    gridTemplateColumns: "auto minmax(0,1fr) auto",
    gridTemplateAreas: `"bar-left main-center-container bar-right"`,
    gap: "0.5rem",
    margin: "0.5rem",
});