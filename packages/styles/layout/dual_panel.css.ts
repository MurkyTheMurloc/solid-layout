import {createVar, fallbackVar, globalStyle} from "@vanilla-extract/css";

export const gap = createVar();
export const padding = createVar();
export const marginInline = createVar();
export const mainPanelSize = createVar();
export const sidePanelSize = createVar();
globalStyle(".solid-layout-dual-panel",{
    display: "flex",
    flexWrap: "wrap",
    alignItems: "start",
    marginInline: fallbackVar(marginInline, "auto"),
    gap: fallbackVar(gap, "1rem"),
});

globalStyle(".solid-layout-main-panel",{
    flexBasis: fallbackVar(mainPanelSize, "500px"),
    flexGrow: 9999,
});

globalStyle(".solid-layout-side-panel",{
    flexBasis: fallbackVar(sidePanelSize, "300px"),
    flexGrow: 1,
});