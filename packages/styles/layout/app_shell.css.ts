import {globalStyle} from "@vanilla-extract/css";

export const appShellContainer = "solid-layout-app-shell-query-container";

globalStyle(".solid-layout-app-shell", {
    height: "100%",
    display: "grid",
    gridTemplateAreas: `"header-container"
                           "main-container"
                            "footer"`,
    gridTemplateRows: "auto minmax(0,1fr) auto",
    gap: "0.5rem",
    containerName: appShellContainer,
    containerType: "inline-size",
});




