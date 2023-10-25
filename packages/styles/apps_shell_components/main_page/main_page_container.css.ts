import {globalStyle} from "@vanilla-extract/css";
import {appShellContainer} from "../../layout/app_shell.css";

globalStyle(".solid-layout-app-shell-main-page-container",{
    display: "grid",
    gridArea: "main-center-container",
    gridTemplateColumns: "minmax(0,1fr)",
    gridTemplateAreas: `"app-shell-main-page-container-top"
                                "app-shell-main-page-container-center"
                                "app-shell-main-page-container-bottom"`,
    gridTemplateRows: "auto minmax(0,1fr) auto",
    gap: "0rem",

    "@container": {
        [`${appShellContainer} (min-width: 640px)`]: {
            gap: "1rem",
        },
        [`${appShellContainer}(min-width: 768px)`]: {
            gap: "1rem",
        },
    }
});