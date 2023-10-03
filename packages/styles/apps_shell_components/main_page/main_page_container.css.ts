import {style} from "@vanilla-extract/css";

export const mainPageCenterContainer = style({
    display: "grid",
    gridArea: "main-center-container",
    gridTemplateColumns: "minmax(0,1fr)",
    gridTemplateAreas: `"app-shell-main-page-container-top"
                                "app-shell-main-page-container-center"
                                "app-shell-main-page-container-bottom"`,
    gridTemplateRows: "auto minmax(0,1fr) auto",
    gap: "0rem",

    "@container": {
        "@media (min-width: 640px)": {
            gap: "1rem",
        },
        "@media (min-width: 768px)": {
            gap: "1rem",
        },
    }
});