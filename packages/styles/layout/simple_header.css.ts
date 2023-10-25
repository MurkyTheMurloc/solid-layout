import {createVar, fallbackVar, globalStyle, style} from "@vanilla-extract/css";

export const width = createVar();
export const height = createVar();

export const positionType = createVar();

globalStyle(".solid-layout-simple-header",{
    position: fallbackVar(positionType, "fixed"),
    top:  "0px",
    left: "0px",
    right: "0px",
    bottom: "100%",
    width: fallbackVar(width,"100%"),
    height: fallbackVar(height,"8%")
});