import {createVar, fallbackVar, globalStyle} from "@vanilla-extract/css";

export const height = createVar();

export const scrollBar = createVar();



globalStyle(".solid-layout-scroll-area",{
    overflowY: "auto",
    height: fallbackVar(height, "100vh"),
    position: "relative",
    justifyItems: "space-evenly",
    scrollbarWidth: fallbackVar(scrollBar, "none"),
    msOverflowStyle: fallbackVar(scrollBar, "none"),

});

globalStyle(".solid-layout-scroll-area::-webkit-scrollbar",{
    display: fallbackVar(scrollBar, "none"),
})