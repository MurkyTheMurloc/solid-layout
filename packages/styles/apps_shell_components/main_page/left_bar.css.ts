import {globalStyle} from "@vanilla-extract/css";
import {appShellContainer} from "../../layout/app_shell.css";


globalStyle(".solid-layout-app-shell-left-bar",{
    gridArea: "bar-left",
    "@container": {
        [`${appShellContainer}  (max-width: 768px)`]: {
            display: "none"
        },
    }
});