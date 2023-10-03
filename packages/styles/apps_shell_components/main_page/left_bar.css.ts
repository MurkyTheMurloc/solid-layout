import {style} from "@vanilla-extract/css";
import {appShell} from "../../layout/app_shell.css";

export const leftBar = style({
    gridArea: "bar-left",
    "@container": {
        [`${appShell}  (max-width: 768px)`]: {
            display: "none"
        },
    }
});