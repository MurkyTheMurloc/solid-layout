import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const height = createVar();

export const scrollBar = createVar()


export const scrollArea = style({
    overflowY: "auto",
    height: fallbackVar(height, "100vh"),
    position: "relative",
    justifyItems: "space-evenly",
    scrollbarWidth: fallbackVar(scrollBar, "none"),
    msOverflowStyle: fallbackVar(scrollBar, "none"),
    "::-webkit-scrollbar": {
        display: fallbackVar(scrollBar, "none"),
    }
});