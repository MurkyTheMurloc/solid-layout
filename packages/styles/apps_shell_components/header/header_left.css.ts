import {createVar, style} from "@vanilla-extract/css";

import {appShell} from "../../layout/app_shell.css";

export const displayValue = createVar()
export const headerLeft = style({
    gridArea: "header-left",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: "none"
        }
    }
})

export const headerLeftBurgerMenu = style({
    gridArea: "header-left",
    display: "none",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: displayValue
        }
    }
})