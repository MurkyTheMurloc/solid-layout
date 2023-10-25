import {createVar,globalStyle} from "@vanilla-extract/css";
import { appShellContainer } from "../../layout/app_shell.css";

export const displayValue = createVar()
globalStyle(".solid-layout-app-shell-header-center",{
    gridArea: "header-center",

    "@container": {
        [`${appShellContainer} (max-width: 768px)`]: {
            display: "none"
        },
    }
});

globalStyle(".solid-layout-app-shell-header-center-burger-menu",{
    gridArea: "header-center",
    display: "none",
    "@container": {
        [`${appShellContainer} (max-width: 768px)`]: {
            display: displayValue
        },
    }
})