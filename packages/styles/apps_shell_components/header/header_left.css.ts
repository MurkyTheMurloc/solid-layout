import {createVar, globalStyle} from "@vanilla-extract/css";
import { appShellContainer } from "../../layout/app_shell.css";


export const displayValue = createVar()
globalStyle(".solid-layout-app-shell-header-left",{
    gridArea: "header-left",
    "@container": {
        [`${appShellContainer} (max-width: 768px)`]: {
            display: "none"
        }
    }
})

globalStyle(".solid-layout-app-shell-header-left-burger-menu",{
    gridArea: "header-left",
    display: "none",
    "@container": {
        [`${appShellContainer} (max-width: 768px)`]: {
            display: displayValue
        }
    }
})