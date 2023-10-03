import {createVar, style} from "@vanilla-extract/css";

export const zIndexBackground = createVar()
export const positionBackGround = createVar()

export const moveToBackGround = style({
    zIndex: zIndexBackground,
    position: positionBackGround,
});