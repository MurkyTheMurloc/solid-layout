import {createVar, fallbackVar, style} from "@vanilla-extract/css";
import {appShell} from "./app_shell.css";

export const smColumnWidth = createVar();
export const mdColumnWidth = createVar();
export const lgColumnWidth = createVar();
export const xlColumnWidth = createVar();
export const xxlColumnWidth = createVar();
export const autoFill = createVar()
export const gridGap = createVar();
export const grid = style({
    display: "grid",
    gridTemplateColumns: `repeat(${autoFill}, minmax(${fallbackVar(xlColumnWidth, "250px")}, 1fr))`,
    gap: fallbackVar(gridGap, "1rem"),
    "@container": {
        [`${appShell}  (max-width: 480px)`]: {
            gridTemplateColumns: `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${fallbackVar(smColumnWidth, "100px")}px, 1fr))`
        },
        [`${appShell}  (max-width: 768px)`]: {
            gridTemplateColumns: `repeat(${autoFill}, minmax(${fallbackVar(mdColumnWidth, "150px")}, 1fr));`
        },
        [`${appShell}  (max-width: 1024px)`]: {
            gridTemplateColumns: `repeat(${autoFill}, minmax(${fallbackVar(lgColumnWidth, "200px")}, 1fr))`
        },
        [`${appShell}  (max-width: 1280px)`]: {
            gridTemplateColumns: `repeat(${autoFill}, minmax(${fallbackVar(xlColumnWidth, "250px")}, 1fr))`
        },
        [`${appShell}  (max-width: 1536px)`]: {
            gridTemplateColumns: `repeat(${autoFill}, minmax(${fallbackVar(xxlColumnWidth, "300px")}, 1fr))`
        }
    },
});

