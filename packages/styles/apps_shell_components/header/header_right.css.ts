import {createVar, style} from "@vanilla-extract/css";

import {appShell} from "../../layout/app_shell.css";

export const displayValue = createVar()
export const headerRight = style({
    gridArea: "header-right",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: "none"
        }
    }
})

export const headerRightBurgerMenu = style({
    gridArea: "header-right",
    display: "none",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: displayValue
        }
    }
})