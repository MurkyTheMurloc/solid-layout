import {createVar, style} from "@vanilla-extract/css";
import {appShell} from "../../layout/app_shell.css";

export const displayValue = createVar()
export const headerCenter = style({
    gridArea: "header-center",

    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: "none"
        },
    }
});

export const headerCenterBurgerMenu = style({
    gridArea: "header-center",
    display: "none",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: displayValue
        },
    }
})