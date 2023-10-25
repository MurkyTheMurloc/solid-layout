import {createVar, fallbackVar, globalStyle} from "@vanilla-extract/css";

export const width = createVar();
export const height = createVar();

export const positionType = createVar();

globalStyle(".solid-layout-simple-footer",{
    position: fallbackVar(positionType, "sticky"),
    top:  "100%",
    left: "0px",
    right: "0px",
    bottom: "0px",
    width: fallbackVar(width,"100%"),
    height: fallbackVar(height,"8%")
});