import {createVar, style} from "@vanilla-extract/css";
import {appShell} from "../../layout/app_shell.css";

export const mainPageBottomBreakPoint = createVar();
export const mainPageBottom = style({
    gridArea: "app-shell-main-page-container-bottom",
    display: "none",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: mainPageBottomBreakPoint,

        },
        [`${appShell}  (min-width: 768px)`]: {
            display: "none"
        }
    }

})