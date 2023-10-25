import {globalStyle} from "@vanilla-extract/css";

globalStyle(".solid-layout-app-shell-header-container",{
    gridArea: "header-container",
    display: "grid",
    gridTemplateAreas: `"header-left header-center header-right"`,
    gridTemplateColumns: "auto minmax(0,1fr) auto",
    gap: "0.5rem",
    margin: "0.5rem",
})