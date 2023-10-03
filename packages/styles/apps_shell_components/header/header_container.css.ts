import {style} from "@vanilla-extract/css";

export const headerContainer = style({
    gridArea: "header-container",
    display: "grid",
    gridTemplateAreas: `"header-left header-center header-right"`,
    gridTemplateColumns: "auto minmax(0,1fr) auto",
    gap: "0.5rem",
    margin: "0.5rem",
})