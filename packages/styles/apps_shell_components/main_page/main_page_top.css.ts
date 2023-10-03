import {createVar, style} from "@vanilla-extract/css";
import {appShell} from "../../layout/app_shell.css";

export const mainPageTopBreakPoint = createVar();
export const mainPageTop = style({
    gridArea: "app-shell-main-page-container-top",
    display: "none",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: mainPageTopBreakPoint,

        },
        [`${appShell}  (min-width: 768px)`]: {
            display: "none"
        }
    }
})