import {globalStyle} from "@vanilla-extract/css";


globalStyle(".solid-layout-app-shell-main-container",{
    display: "grid",
    gridArea: "main-container",
    gridTemplateColumns: "auto minmax(0,1fr) auto",
    gridTemplateAreas: `"bar-left main-center-container bar-right"`,
    gap: "0.5rem",
    margin: "0.5rem",
});