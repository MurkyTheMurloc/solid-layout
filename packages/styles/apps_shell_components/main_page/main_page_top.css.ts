import {createVar, globalStyle} from "@vanilla-extract/css";
import {appShellContainer} from "../../layout/app_shell.css";


export const mainPageTopBreakPoint = createVar();
globalStyle(".solid-layout-app-shell-main-page-top",{
    gridArea: "app-shell-main-page-container-top",
    display: "none",
    "@container": {
        [`${appShellContainer} (max-width: 768px)`]: {
            display: mainPageTopBreakPoint,

        },
        [`${appShellContainer} (min-width: 768px)`]: {
            display: "none"
        }
    }
})