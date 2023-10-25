import {globalStyle} from "@vanilla-extract/css";
import {appShellContainer} from "../../layout/app_shell.css";


globalStyle(".solid-layout-app-shell-right-bar",{
    gridArea: "bar-right",
    "@container": {
        [`${appShellContainer}  (max-width: 768px)`]: {
            display: "none"
        },
    }
});