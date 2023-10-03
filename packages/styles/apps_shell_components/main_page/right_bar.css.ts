import {style} from "@vanilla-extract/css";
import {appShell} from "../../layout/app_shell.css";

export const rightBar = style({
    gridArea: "bar-right",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: "none"
        },
    }
});