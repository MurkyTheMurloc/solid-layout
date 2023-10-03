import {style} from "@vanilla-extract/css";


export const footerContainer = style({
    gridArea: "footer",
    display: "grid",
    gridTemplateAreas: `"footer-left footer-center footer-right"`,
    gridTemplateColumns: "auto minmax(0,1fr) auto",
    gap: "0.5rem",
    margin: "0.5rem",
})