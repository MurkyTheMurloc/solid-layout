import {createVar, globalStyle} from "@vanilla-extract/css";
import { appShellContainer } from "../../layout/app_shell.css";


export const displayValue = createVar()
globalStyle(".solid-layout-app-shell-header-right",{
    gridArea: "header-right",
    "@container": {
        [`${appShellContainer} (max-width: 768px)`]: {
            display: "none"
        }
    }
})

globalStyle(".solid-layout-app-shell-header-right-burger-menu",{
    gridArea: "header-right",
    display: "none",
    "@container": {
        [`${appShellContainer}  (max-width: 768px)`]: {
            display: displayValue
        }
    }
})