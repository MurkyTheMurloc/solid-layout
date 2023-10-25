import {createVar, fallbackVar, globalStyle, style} from "@vanilla-extract/css";

export const width = createVar();
export const height = createVar();

export const positionType = createVar();

globalStyle(".solid-layout-simple-left-bar",{
    position: fallbackVar(positionType, "fixed"),
    top: "0px",
    left: "0px",
    right: "100%",
    bottom: "0px",
    width: fallbackVar(width,"8%"),
    height: fallbackVar(height,"100%")
});