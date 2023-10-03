import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const gap = createVar();
export const padding = createVar();
export const marginInline = createVar();
export const mainPanelSize = createVar();
export const sidePanelSize = createVar();
export const dualPanelContainer = style({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "start",
    marginInline: fallbackVar(marginInline, "auto"),
    gap: fallbackVar(gap, "1rem"),
});

export const dualPanelMainPanel = style({
    flexBasis: fallbackVar(mainPanelSize, "500px"),
    flexGrow: 9999,
});

export const dualPanelSidePanel = style({
    flexBasis: fallbackVar(sidePanelSize, "300px"),
    flexGrow: 1,
});