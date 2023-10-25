import {createVar, globalStyle} from "@vanilla-extract/css";
import { appShellContainer } from "../../layout/app_shell.css";


export const mainPageBottomBreakPoint = createVar();
globalStyle(".solid-layout-app-shell-main-page-container-bottom",{
    gridArea: "app-shell-main-page-container-bottom",
    display: "none",
    "@container": {
        [`${appShellContainer}  (max-width: 768px)`]: {
            display: mainPageBottomBreakPoint,

        },
        [`${appShellContainer} (min-width: 768px)`]: {
            display: "none"
        }
    }

})