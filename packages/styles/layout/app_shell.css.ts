import {createContainer, createVar, style} from "@vanilla-extract/css";

export const appShell = createContainer()
export const appShellBreakPoint = createVar()
export const appShellContainer = style({
    height: "100%",
    display: "grid",
    gridTemplateAreas: `"header-container"
                           "main-container"
                            "footer"`,
    gridTemplateRows: "auto minmax(0,1fr) auto",
    gap: "0.5rem",
    containerName: appShell,
    containerType: "inline-size",
});




