import {style} from "@vanilla-extract/css";

export const center = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
});


export const right = style({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
});

export const left = style({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
});

export const apart = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
});